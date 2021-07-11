require('dotenv').config();
const ImportZoho = require('importzoho');

//Busca registros pelo ID
const getRecordById = async ()=>{

    console.log('ok');

    try{
        let id = '116652000058774195';
        console.log(typeof id)
        let importacaoTeste = await ImportZoho.getId("ImportacaoTeste",id);
        console.log(importacaoTeste)
    }
    catch(e){
        console.log(e)
    }
}

//
const getRecords = async ()=>{
    try{
        let records = await ImportZoho.getRecords("ImportacaoTeste",{"params":{ page: 1, per_page: 200 }})
        console.log(records)

    }
    catch(e){
        console.log(e)
    }
}

const getRecordModifiedSince = async ()=>{
    try{
        let records = await ImportZoho.getRecords("ImportacaoTeste",{ "modified_since": "2020-02-03T00:00:00-03:00" })
        console.log(records.size())

    }
    catch(e){
        console.log(e)
    }
}

const searchRecord = async ()=>{
    try{
        let records = await ImportZoho.searchRecords("ImportacaoTeste","(Name:equals:$_name)",()=>{},[{name: "Teste%2333799_2021_02_24"}])
        console.log(records[0].response)

    }
    catch(e){
        console.log(e)
    }
}

const updateRecord = async ()=>{
    // não consegui ver o retorno
    let records = await ImportZoho.updateRecords("ImportacaoTeste",[{"id":"116652000058774210","Name": "Exempl233"}],()=>{})
}

const updateRecordCallback = async ()=>{
    let records = null
    await ImportZoho.upsertRecords("ImportacaoTeste",[{"id":"116652000058774210","Name": "Exempl233"}],(error,response)=>{
        console.log(response[0])
    }, { trigger: ["workflow"] })
}

const insertRecord = async ()=>{
    try{
    let record = await ImportZoho.insertRecords("ImportacaoTeste",[{"Name": "ChamadaABC"}],()=>{})
    console.log(record[0].response.success)
    }
    catch(e){
        console.log(e)
    }
}

const upsertRecord = async ()=>{
    try{
    let record = await ImportZoho.upsertRecords("ImportacaoTeste",[{"Name": "Teste1 abc","Message":"Chamada ABC"}],["Name"],()=>{},{ trigger: ["workflow"] })
    console.log({record})
    }
    catch(e){
     console.log(e)
    }
}
//upsertRecord();
//insertRecord()
//updateRecordCallback()
//updateRecord()
//searchRecord()
//getRecordModifiedSince()
//getRecords
//getRecordById()