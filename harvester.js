module.exports = function(creep)
{
    //var source;
    //if (creep.memory.source == null)
    //{
        //source = creep.room.find(FIND_SOURCES)[0];
        //creep.memory.source = source;
    //} else
    //{
        //source = creep.memory.source;
    //}
    
    
    
	var source = creep.room.find(FIND_SOURCES)[0];
    console.log(source.pos.x);
    console.log(source.pos.y);
    console.log(creep.moveTo(source));
    creep.harvest(source);
}
