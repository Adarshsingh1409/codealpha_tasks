export function getHealth(_req, res) {
    const payload = { status: 'ok' };
    res.json(payload);
}
