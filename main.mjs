Hooks.once("init", () => {
    game.settings.register("mrkb-sidebar-resizer", "sidebar-size", {
        name: game.i18n.localize("MRKB.SidebarWidth"),
        hint: game.i18n.localize("MRKB.SidebarWidthHint"),
        scope: "client",
        config: false,
        type: Number,
        default: 300,
        onChange: (value) => {
            document.body.style.setProperty("--sidebar-width", `${value}px`);
        }
    });
    game.settings.register("mrkb-sidebar-resizer", "sidebar-lock", {
        name: "MRKB.LockSidebar",
        hint: "MRKB.LockSidebarHint",
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            const resizer = document.getElementById("sidebar-resizer");
            if (resizer) {
                resizer.style.display = value ? "none" : "block";
            }
        }
    });
    game.settings.register("mrkb-sidebar-resizer", "reset-sidebar", {
        name: "MRKB.ResetSidebar",
        hint: "MRKB.ResetSidebarHint",
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            if (value) {
                const defaultSize = 300;
                game.settings.set("mrkb-sidebar-resizer", "sidebar-size", defaultSize);
                document.body.style.setProperty("--sidebar-width", `${defaultSize}px`);
                game.settings.set("mrkb-sidebar-resizer", "reset-sidebar", false);
            }
        }
    });
});
Hooks.once("ready", () => {
    const sidebarContent = ui.sidebar.element.querySelector("#sidebar-content");

    const setTabsWidth = (width) => {
        sidebarContent.style.width = `${width + 12}px`;
    }

    const savedWidth = game.settings.get("mrkb-sidebar-resizer", "sidebar-size");
    document.body.style.setProperty("--sidebar-width", `${savedWidth}px`);

    const resizer = document.createElement("div");
    resizer.id = "sidebar-resizer";
    resizer.style.display = game.settings.get("mrkb-sidebar-resizer", "sidebar-lock") ? "none" : "block";
    resizer.onmousedown = (e) => {
        e.preventDefault();
        document.body.style.userSelect = "none";

        const originWidth = game.settings.get("mrkb-sidebar-resizer", "sidebar-size");
        const startX = e.clientX;

        const onMouseMove = (e) => {
            const minWidth = 300;
            const newWidth = Math.max(minWidth, originWidth - (e.clientX - startX));

            setTabsWidth(newWidth);
        };

        const onMouseUp = (e) => {
            const newWidth = sidebarContent.offsetWidth;

            game.settings.set("mrkb-sidebar-resizer", "sidebar-size", newWidth);

            document.body.style.userSelect = "";
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    sidebarContent.prepend(resizer);
});