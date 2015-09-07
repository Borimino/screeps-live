module.exports = function(creep)
{
    var source;
    if (creep.memory.sourceID == null)
    {
        source = creep.room.find(FIND_SOURCES)[0];
        creep.memory.sourceID = source.id;
    } else
    {
        source = Game.getObjectById(creep.memory.sourceID);
    }

    var spawn;
    if (creep.memory.spawnID == null)
    {
        spawn = creep.room.find(FIND_SPAWNS)[0];
        creep.memory.spawnID = spawn.id;
    } else
    {
        spawn = Game.getObjectById(creep.memory.spawnID);
    }
    
	var isGoingOut;
	if (creep.memory.isGoingOut == null)
	{
		isGoingOut = true;
		creep.memory.isGoingOut = true;
	} else
	{
		isGoingOut = creep.memory.isGoingOut;
	}

	if (isGoingOut)
	{
		creep.moveTo(source.pos.x, source.pos.y);
		creep.harvest(source);
		if (creep.carry.energy >= creep.carryCapacity)
		{
			isGoingOut = false;
		}
	} else
	{
		creep.moveTo(spawn.pos.x, spawn.pos.y);
		creep.transferEnergy(spawn);
		if (creep.carry.energy <= 0)
		{
			isGoingOut = true;
		}
	}

	creep.memory.isGoingOut = isGoingOut;
}
