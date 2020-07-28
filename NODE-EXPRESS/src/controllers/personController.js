export function post(req, res, next) {
    res.status(201).send('Requisição recebida com sucesso!');
}
export function put(req, res, next) {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
}
const _delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
export { _delete as delete };