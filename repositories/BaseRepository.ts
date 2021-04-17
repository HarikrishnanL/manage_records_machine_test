abstract class BaseRepository {

    abstract model(): any

    async findAll() {
        const model = this.model();
        const obj = await model.findAll();
        return obj;
    }

    async findOne(predicate) {
        const model = this.model();
        const obj = await model.findOne(predicate);
        return obj;
    }

    async add(data: any) {
        const model = this.model();
        const obj = await model.sync().then(function () {
            return model.create(data);
        })
        return obj;
    }

    async findAndUpdate(data, predicate = {}) {
        const model = this.model();
        const obj = await model.update(data, { where: predicate });
        return obj;
    }
}

export default BaseRepository;
