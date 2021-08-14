//requires


const yargs = require("yargs");

const DataStudent = require("./system");

//add command 

yargs.command({
    command:"add",
    describe:"this is add student to the school system",
    builder:{
        id:{
            describe:"this is id of the student",
            demandOption:true,
            type:"number",
        },
        name:{
            describe:"this is name of the student",
            demandOption:true,
            type:"string",
        },
        grade:{
            describe:"this is garde of the student",
            demandOption:true,
            type:"number",
        },
        comment:{
            describe:"this is comment of the student",
            demandOption:false,
            type:"string",
        },
    handler:(argv) => {
        DataStudent.addData(argv.id,argv.name,argv.grade,argv.comment)
    
    }    
    },
});



//read command 

yargs.command({
    command:"read",
    describe:"this is read to the school system",
    builder:{
        id:{
            describe:"this is read of the student",
            demandOption:true,
            type:"number",
        },
       
    handler:(argv) => {
        DataStudent.readData(argv.id)
    }    
    },
});



//delete command

yargs.command({
    command:"delete",
    describe:"this is delete to the school system",
    builder:{
        id:{
            describe:"this is delete of the student",
            demandOption:true,
            type:"number",
        },
       
    handler:(argv) => {
        DataStudent.removeData(argv.id)
    }    
    },
});



//list command 

yargs.command({
    command:"list",
    describe:"this is list to the school system",
    builder:{
        id:{
            describe:"this is list of the student",
            demandOption:true,
            type:"number",
        },
       
    handler:(argv) => {
        DataStudent.listData(argv.id)
    }    
    },
});

yargs.parse()