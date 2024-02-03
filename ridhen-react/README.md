

# class 1 (Javascript)
Data Types

1. String => naam => "AS SA a sA S"
2. Number => 2 23 323 , doube qoute "" nahi hai
                2 4 5 6 => yes numbe rhai
                "2" => data type string


3. Boolean => condition True | False
        => haan ya to naa

4. null => jiski koi value nahi hai.
5. undefined => jo defined nahi hai.
6. Object => 1. Anything that exist, and can be proved scientifycally its existence it is object.
              2.  Anything that have feature, properties or behaviour.

        const car1 = {};

        const car2 = {
            key: value
        }

        const car3 = {
            color: "green",
            model: "suzuki x5",
            year: 2016,
            isNew: false,
        }


7. Array => array ka mtlb hai collection, group

    const students = [
        "ridhen",
        "aman",
        "ankit"
    ];

    const price = [
        5,
        10,
        15,
        34
    ];

    syntax to know which data type a variable belongs to,

    typeof variableName;

# Operators

1. Arithmetic Operators (+, - , * , / , % (modulus) )
2. Comparision Operators( < , >, == , =< , >=)          => boolean TRUE / FALSE


# if else

1. if( condition ){

}


2. if ( condition ) {
        TRUE
} else {
    FALSE
}

3. if (condition 1) {
    CONDITION 1 TRUE
} else if (condition 2) {
    CONDITION 2 TRUE
} else if (condition 3) {
    CONDITION 3 TRUE
} else {
    FALSE
}

4. nested if else

    if (condition 1){
        CONDITION TRUE

        if(condition 2){
condition 2 TRUE
        } else {
condition 2 FALSE
        }

    } else {
        FALSE
    }