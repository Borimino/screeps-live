console.log("TEST");
for (var i in Game.creeps)
{
    console.log(i);
    var creep = Game.creeps[i];
    console.log(i);
    console.log(creep.name);
    var harvester = require('harvester');
    harvester(creep);
}

var spawn = Game.spawns.Spawn1;
if (spawn.energy >= 200)
{
    console.log(spawn.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'}));
}
