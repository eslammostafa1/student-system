//requires
const fs = require('fs')



//add function
const addData = (id, name, grade, comment) => {
const Student = loadData();
const noRepeat = Student.filter((data) => {
    return data.id === id ;
})
console.log(noRepeat)
if (noRepeat.length === 0) {
    Student.push({
    id,
    name,
    grade,
    comment
})
saveData(Student)
console.log('saved student successfully');
} else {
    console.log(' failed repeated student ')
}
}

//read function 

const readData = (id) => {
    const Student = loadData();

    const data = Student.find((data) => {
        return data.id === id
    })
    
    if(data){
        console.log(data)
        console.log('ID: '+data.id)
        console.log('Name: '+data.name)
        console.log('Grade: '+data.grade +' %')
        console.log('Comment: '+data.comment)
    }
}


//delete function 

const removeData = (id) => {
    const Student = loadData();
    const keepData = Student.filter((data) => {
        return data.id !== id
    })
    console.log(keepData)
    saveData(keepData)
}


//list function

const listData = () => {
    const Student = loadData();    
    Student.forEach((data) => {
        console.log(data)
        // console.log('id: '+data.id)
        // console.log('name: '+data.name)
        // console.log('garde: '+data.grade)
    });
}

//change data from json to object
const loadData = () => {
    try{
        const dataBuffer = fs.readFileSync("student.json").toString();
        return JSON.parse(dataBuffer)
    }
    catch(e){
            return [];
    }
}

//change data from object to json
const saveData = (Student) => {
    const datastud = JSON.stringify(Student)
    fs.writeFileSync("student.json", datastud)
}

//modules
module.exports ={
    addData:addData,
    readData:readData,
    removeData:removeData,
    listData:listData,
};

