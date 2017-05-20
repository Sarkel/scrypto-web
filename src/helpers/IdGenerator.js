/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
class IdGenerator {
    constructor() {
        this._gen = IdGenerator._getRandomUniqueIntGenerator();
    }

    getValue() {
        return this._gen.next().value;
    }

    static *_getRandomUniqueIntGenerator() {
        let id = 0;
        while (true) {
            yield id++;
        }
    }
}

export default new IdGenerator();