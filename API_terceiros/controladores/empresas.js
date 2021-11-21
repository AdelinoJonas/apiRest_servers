const axios = require('axios');
const fs = require('fs/promises');

async function obterEmpresa(req, res) {
    const dominio = req.params.dominio;

    const companyResponse = await axios.get(`https://companyenrichment.abstractapi.com/v1/?api_key=1dfd46900b8048b18d92c3dcdbcac626&domain=${dominioEmpresa}`);

    if (companyResponse.data && companyResponse.data.name) {
        const empresas = JSON.parse(await fs.readFile('./dados/empresas.json'));

        empresas.push(companyResponse.data);

        fs.writeFile('./dados/empresas.json', JSON.stringify(empresas, null, 2));
    }

    res.json(companyResponse.data);
}

module.exports = {obterEmpresa}