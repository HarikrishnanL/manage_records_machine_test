import app from './index'

// Port Number
const port = process.env.port || 3000

const appListenCallBack = async () => {
    try {
        console.log('Server started on port ' + port);
    } catch (error) {
        console.log('Server started on port ' + port + ' with error ' + error);
    }
}

app.listen(port, appListenCallBack);