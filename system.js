//requires
const fs = require('fs')



//add function
const addData = (id, name, grade, comment) => {
const DataStudent = loadData()
const noRepeat = DataStudent.filter((data) => {
    return data.id === id ;
})
console.log(noRepeat)
if (noRepeat.length === 0) {
DataStudent.push({
    id:id,
    name:name,
    grade:grade,
    comment:comment
})
saveData(DataStudent)
console.log('saved student successfully');
} else {
    console.log(' failed repeated student ')
}
}

//read function 

const readData = (id) => {
    const DataStudent = loadData()

    const data = DataStudent.find((data) => {
        return data.id === id
    })
    if(data){
        console.log(data)
        console.log(data.id)
        console.log(data.name)
        console.log(data.grade)
        console.log(data.comment)
    }
}


//delete function 

const removeData = (data) => {
    const DataStudent = loadData()
    const keepData = DataStudent.filter((data) => {
        return data.id !== id
    })
    console.log(keepData)
    saveData(keepData)
}


//list function

const listData = () => {
    const DataStudent = loadData()    
    DataStudent.forEach((data) => {
        console.log(data.id)
    });
}

//change data from json to object
const loadData = () => {
    try{
        const dataBuffer = fs.readFileSync("student.json").toString();
        return JSON.parse(dataBuffer);
    }
    catch(e){
            return [];
    }
}

//change data from object to json
const saveData = (dataStudent) => {
    const datastud = JSON.stringify(dataStudent)
    fs.writeFileSync("student.json", datastud)
}

//modules
module.exports ={
    addData:addData,
    readData:readData,
    removeData:removeData,
    listData:listData,
};

