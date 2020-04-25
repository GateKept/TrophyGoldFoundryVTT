export class TrophyItemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["sheet", "item"],
            width: 520,
            height: 480,
            tabs: [{
                navSelector: ".sheet-tabs",
                contentSelector: ".sheet-body",
                initial: "notes"
            }]
        });
    }

    get template() {
        const path = "systems/trophygold/templates/sheet"
        return `${path}/${this.item.data.type}-sheet.html`;
    }


    getData() {
        const data = super.getData();
        data.dtypes = ["String", "Number", "Boolean"];
        return data;
    }


    activateListeners(html) {
        super.activateListeners(html);

        // Activate tabs
        let tabs = html.find('.tabs');
        let initial = this._sheetTab;
        new Tabs(tabs, {
            initial: initial,
            callback: clicked => this._sheetTab = clicked.data("tab")
        });
    }
}
