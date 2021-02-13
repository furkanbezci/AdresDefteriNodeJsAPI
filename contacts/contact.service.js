
var contacts = [
    {
        id:1, userid: 1, name: 'ayşe göl',
        phone: '5623213', email: '1@1.com', lat: 39.170148, long: 32.789022
    }
]

module.exports = {
    getAll,
    create,
    update,
    deletec
};

async function getAll(userid) {
    return contacts.filter(s => s.userid == userid);
}

function create(model) {
    model.id = Date.now()
    contacts.push(model)
    return model;    
}

 function update(model) {
    var index = contacts.map(s=>s.id).indexOf(model.id)
    contacts[index] = model;
    return contacts[index];    
}

 function deletec(model) {
    contacts = contacts.filter(s=>s.id != model.id)
    return contacts;    
}