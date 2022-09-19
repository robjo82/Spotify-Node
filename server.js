import express, {json} from "express"

const app = express()

app.use(json())

app.get("/", (request, response) => {
    response.statusCode = 200
    response.send({ message: "Mon premier JSON!"})
})

app.listen(3000, () =>{
    console.log(`Server started at http://localhost:${3000}`)
})
