export class TrophyActorSheet extends ActorSheet {

    static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
  	  classes: ["sheet", "actor"],
      width: 675,
      height: 750,
      tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes"}]
    });
  }
    
    get template() {
        const path = "systems/trophygold/templates/sheet"
        return `${path}/${this.actor.data.type}-sheet.html`;
    }
    
    getData() {
    const data = super.getData();
    data.dtypes = ["String", "Number", "Boolean"];
    this.prepareCharacterItems(data);
    return data;
  }

    prepareCharacterItems(sheetData) {
    const actorData = sheetData.actor;

    const equipment = [];
    const powers = [];

    for (let i of sheetData.items) {
      let item = i.data;
      i.img = i.img || DEFAULT_TOKEN;
      if (i.type === 'power') {
        powers.push(i);
      }
      
      
      else if (i.type === 'item') {
        equipment.push(i);
      }
    }

    
    actorData.powers = powers;
    
    actorData.equipment = equipment;
  }
    
    
    activateListeners(html) {
    super.activateListeners(html);
    
        
    let tabs = html.find('.tabs');
    let initial = this._sheetTab;
    new Tabs(tabs, {
      initial: initial,
      callback: clicked => this._sheetTab = clicked.data("tab")
    });
    
    if (!this.options.editable) return;

    // Owned Item management
    html.find('.item-create').click(this.onItemCreate.bind(this));
    html.find('.item-edit').click(this.onItemEdit.bind(this));
    html.find('.item-delete').click(this.onItemDelete.bind(this));

    }
    
  onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    const data = duplicate(header.dataset);
    const itemData = {
      name: `New ${type.capitalize()}`,
      type: type,
      data: data
    };
    delete itemData.data["type"];
    return this.actor.createOwnedItem(itemData);
  }

  onItemEdit(event) {
    event.preventDefault();
    const li = event.currentTarget.closest(".item");
    const item = this.actor.getOwnedItem(li.dataset.itemId);
    item.sheet.render(true);
  }

  onItemDelete(event) {
    event.preventDefault();
    const li = event.currentTarget.closest(".item");
    this.actor.deleteOwnedItem(li.dataset.itemId);
  }
}