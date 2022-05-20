'use strict';
(function() {
    var db = {
        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Nome || client.Nome.indexOf(filter.Nome) > -1)
                    && (!filter.Email || client.Email === filter.Email)
                    && (!filter.CPF || client.CPF.indexOf(filter.CPF) > -1)
                    && (!filter.Plano || client.Plano === filter.Plano)
                    && (filter.Boleto === undefined || client.Boleto === filter.Boleto);
            });
        },
        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },
        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }
    };
    window.db = db;
    db.status = [
        { Nome: "Não gerado", Id: 0 },
        { Nome: "Pago", Id: 1 },
        { Nome: "Pendente", Id: 2 },
        { Nome: "Cancelado", Id: 3 },
    ];
    db.clients = [
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",

            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",

            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",

            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",

            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": true
        },
        {
            "Nº do boleto": "0000000",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        }
    ];
    db.users = [
        {
            "ID": "x",
            "Account": "A118A091-0100-01D1-AE11-EEFE00811110",
            "Nº do boleto": "0000000",
            "RegisterDate": "0000-00-00T00:11:10-01:00"
        },
        {
            "Account": "D89FF100-1011-0CE1-C9E1-10EFF011A101",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-00-00T01:19:11-08:00"
        },
        {
            "Account": "00FAAD9A-1110-08F0-D00C-901B0108B0F0",
            "Nº do boleto": "0000000",
            "RegisterDate": "0010-08-11T09:11:09-01:00"
        },
        {
            "Account": "EED1011D-1DD9-A100-00A8-10A11ECDBE11",
            "Nº do boleto": "0000000",
            "RegisterDate": "0010-00-01T01:11:01-08:00"
        },
        {
            "Account": "0A0E0D00-FEBD-C001-A111-9AB0CAF1E0F0",
            "Nº do boleto": "0000000",
            "RegisterDate": "0010-00-01T11:09:10-01:00"
        },
        {
            "Account": "1918F8FA-DFF0-DA0E-0A1D-EB9D081A1080",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-11-10T01:09:01-08:00"
        },
        {
            "Account": "018DBF1A-110E-109A-9011-10FB1F09FA00",
            "Nº do boleto": "0000000",
            "RegisterDate": "0001-00-00T09:11:19-01:00"
        },
        {
            "Account": "10D0EE0B-1A11-1010-F0F0-911EF8C1F901",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-00-11T00:00:09-01:00"
        },
        {
            "Account": "00E00809-A191-CE80-C1B0-D1CAEB1E1E18",
            "Nº do boleto": "0000000",
            "RegisterDate": "0008-08-01T18:19:18-01:00"
        },
        {
            "Account": "C190181C-DDCC-AF81-DDC0-CA1E811A01A0",
            "Nº do boleto": "0000000",
            "RegisterDate": "0000-11-11T00:18:11-08:00"
        },
        {
            "Account": "1911F001-818A-B191-1888-11111CE0D01F",
            "Nº do boleto": "0000000",
            "RegisterDate": "0010-01-01T11:11:10-01:00"
        },
        {
            "Account": "B8BB18F9-E1A1-A910-080F-E10B0FE108B0",
            "Nº do boleto": "0000000",
            "RegisterDate": "0001-01-08T10:18:00-01:00"
        },
        {
            "Account": "00F010C1-9199-1A0D-1FD1-80B00ADDE000",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-00-10T10:10:10-01:00"
        },
        {
            "Account": "FE880CDD-F0E1-11CB-101C-00C0DE190010",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-00-11T10:11:01-01:00"
        },
        {
            "Account": "BBEDD011-E0C1-0810-A1D1-C0EBD0BE0A10",
            "Nº do boleto": "0000000",
            "RegisterDate": "0001-01-10T00:18:09-08:00"
        },
        {
            "Account": "19BC00FA-C10E-0CC0-9110-10101C111FAC",
            "Nº do boleto": "0000000",
            "RegisterDate": "0010-11-01T01:10:10-01:00"
        },
        {
            "Account": "A8090010-0C11-1989-1019-0B81DD011D0C",
            "Nº do boleto": "0000000",
            "RegisterDate": "0008-01-11T19:01:00-01:00"
        },
        {
            "Account": "0081100B-F001-0E1F-EAA1-1FB8F9C011C8",
            "Nº do boleto": "0000000",
            "RegisterDate": "0000-08-01T08:00:00-01:00"
        },
        {
            "Account": "EA18F010-0F0E-0008-008C-1F11010098AE",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-01-01T01:11:19-08:00"
        },
        {
            "Account": "0A88C190-EA01-000F-0FE0-F0AE11F11191",
            "Nº do boleto": "0000000",
            "RegisterDate": "0008-08-11T01:11:00-01:00"
        },
        {
            "Account": "0011E811-019C-AD00-10B1-8111E110108E",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-09-11T01:10:11-01:00"
        },
        {
            "Account": "A0D111C0-9010-B8D0-0181-D00F0BA111BE",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-01-10T01:01:00-01:00"
        },
        {
            "Account": "B1081DE8-C0FA-1CA0-A8A0-8FA1E910F90A",
            "Nº do boleto": "0000000",
            "RegisterDate": "0001-00-01T00:19:01-08:00"
        },
        {
            "Account": "01D91A8E-91BC-0010-F1D0-0011AAFFD11F",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-00-00T11:11:11-01:00"
        },
        {
            "Account": "F0D10CC0-11AC-A80E-FD11-EEEFDBD01A10",
            "Nº do boleto": "0000000",
            "RegisterDate": "0000-01-10T09:11:11-08:00"
        },
        {
            "Account": "810FCC09-9A01-11BC-0F0E-0CE88108AD1B",
            "Nº do boleto": "0000000",
            "RegisterDate": "0008-10-00T00:00:11-08:00"
        },
        {
            "Account": "B8DA1910-00A0-FB0E-0011-1F88FD01EF90",
            "Nº do boleto": "0000000",
            "RegisterDate": "0011-09-00T01:00:01-01:00"
        }
     ];
}());