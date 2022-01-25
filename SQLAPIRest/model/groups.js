class Groups {
    group_id;
    name;
}

function createGroup(name) {
    let groups = new Groups();
    groups.name = name;
    return groups;
}

module.exports = {
    createGroup
}