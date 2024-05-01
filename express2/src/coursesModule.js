import {getCollection} from "./mongoDB.js";

const collectionName = "courses"

export async function getAllCourses() {
    const collection = await getCollection(collectionName)
    return await collection.find().sort({name: 1}).toArray()
}

export async function findCourseByName(name) {
    const collection = await getCollection(collectionName)
    return await collection.findOne({name})
}

export async function addNewCourse(name, studentsNum, startYear) {
    const collection = await getCollection(collectionName)
    const existingCourse = await findCourseByName(name)
    if (existingCourse) {
        return null
    }
    return await collection.insertOne({name, studentsNum, startYear})
}