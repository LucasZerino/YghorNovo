(function($) {
    "use strict";
    $("#basicScenario").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Você realmente deseja excluir esse plano?",
        controller: db,
        
        fields: [
            { Nome: "Nome do plano", type: "text", width: 150 },
            { Nome: "Tipo", type: "select", items: db.tipo, valueField: "Id", textField: "Nome", width: 150 },
            { Nome: "Tipo de pagamento", type: "select", items: db.pagamento, valueField: "Id", textField: "Nome", width: 150 },
            { Nome: "Intervalo", type: "select", items: db.intervalo, valueField: "Id", textField: "Nome", width: 150 },
            { Nome: "Envio anterior", type: "text", width: 130 },
            { Nome: "Próximo envio", type: "text", width: 130 },
            { Nome: "Valor", type: "text", width: 100 },
        { Nome: "Vencimento", type: "select", items: db.status, valueField: "Id", textField: "Nome" },
        { type: "control" }
        ]
    });
    $("#sorting-table").jsGrid({
        height:"400px",
        width: "100%",
        autoload: true,
        selecting: false,
        controller: db,
        fields: [
            { Nome: "Nome", type: "text", width: 150 },
            { Nome: "Email", type: "text", width: 100 },
            { Nome: "CPF", type: "text", width: 150 },
        { Nome: "Plano", type: "select", items: db.countries, valueField: "Id", textField: "Nome" },
        { Nome: "Boleto", type: "checkbox", title: "Gerar Boleto" }
        ]
    });
    $("#sort").click ( function() {
        var field = $("#sortingField").val();
        $("#sorting-table").jsGrid("sort", field);
    });
    $("#batchDelete").jsGrid({
        width: "100%",
        autoload: true,
        confirmDeleting: false,
        paging: true,
        controller: {
            loadData: function() {
                return db.clients;
            }
        },
        fields: [
            {
                headerTemplate: function() {
                    return $("<button>").attr("type", "button").text("Delete") .addClass("btn btn-danger btn-sm btn-delete mb-0")
                        .click( function () {
                            deleteSelectedItems();
                        });
            },
            itemTemplate: function(_, item) {
                return $("<input>").attr("type", "checkbox")
                        .prop("checked", $.inArray(item, selectedItems) > -1)
                        .on("change", function () {
                            $(this).is(":checked") ? selectItem(item) : unselectItem(item);
                        });
            },
            align: "center",
            width: 50
            },
            { Nome: "Nome do plano", type: "text", width: 150 },
            { Nome: "Status", type: "text", width: 100 },
            { Nome: "Valor", type: "text", width: 150 }
        ]
    });
    var selectedItems = [];
    var selectItem = function(item) {
        selectedItems.push(item);
    };
    var unselectItem = function(item) {
        selectedItems = $.grep(selectedItems, function(i) {
            return i !== item;
        });
    };
    var deleteSelectedItems = function() {
        if(!selectedItems.length || !confirm("Tem certeza?"))
            return;
        deleteClientsFromDb(selectedItems);
        var $grid = $("#batchDelete");
        $grid.jsGrid("option", "pageIndex", 1);
        $grid.jsGrid("loadData");
        selectedItems = [];
    };
    var deleteClientsFromDb = function(deletingClients) {
        db.clients = $.map(db.clients, function(client) {
            return ($.inArray(client, deletingClients) > -1) ? null : client;
        });
    };
})(jQuery);