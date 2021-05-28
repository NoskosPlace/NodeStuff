
const isBlank = function checkThingBeingBlank(fieldName, thingIamChecking, res){
    console.log('I did infact run');
    if (thingIamChecking === '') {
        return true;
    } else {
        return false;
    }
};

//TODO revisit the simplification in this function next time we meet up to see if we actually need most of this or if we can "reduce" the if else here.
const setValueToInteger = function checkIfStringEmptyAndSetToNumber(fieldName, integerValue) {
    if (isNaN(integerValue)) {
        //potential bail
        //res.status(400).json(`Value must be integer`);
        return;
    } else {
        return Number(integerValue);
    }
};

module.exports = {
    isBlank:isBlank,
    setValueToInteger:setValueToInteger
};