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
            "Vencimentos Cadastrados": "1",
            "Valor": "100,00 R$",
            "Status": 0,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
        {
            "Vencimentos Cadastrados": "1",
            "Valor": "100,00 R$",
            "Status": 1,
            "Dt emissão": "20/05/2022",
            "Dt vencimento": "21/05/2022",
            "Boleto": false
        },
      
     ];
}());