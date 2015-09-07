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
    
    
    
	//var source = creep.room.find(FIND_SOURCES)[0];
    console.log(source.pos.x);
    console.log(source.pos.y);
    console.log(creep.moveTo(source.pos.x, source.pos.y));
    console.log(creep.harvest(source));
}
