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
    db.countries = [
        { Nome: "Fisioterapia", Id: 0 },
        { Nome: "Pilates", Id: 1 },
    ];
    db.clients = [
        {
            "Nome": "Otto Clay",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-000-00",
            "Boleto": false
        },
        {
            "Nome": "Connor Johnston",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-000-00",
            "Boleto": false
        },
        {
            "Nome": "Lacey Hess",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-000-00",
            "Boleto": false
        },
        {
            "Nome": "Timothy Henson",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-000-00",
            "Boleto": false
        },
        {
            "Nome": "Ramona Benton",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-000-00",
            "Boleto": true
        },
        {
            "Nome": "Ezra Tillman",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-000-00",
            "Boleto": true
        },
        {
            "Nome": "Dante Carter",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-000-00",
            "Boleto": false
        },
        {
            "Nome": "Christopher Mcclure",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-000-00",
            "Boleto": true
        },
        {
            "Nome": "Ruby Rocha",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-000-00",
            "Boleto": false
        },
        {
            "Nome": "Imelda Hardin",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00",
            "Boleto": false
        },
        {
            "Nome": "Jonah Johns",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00",
            "Boleto": false
        },
        {
            "Nome": "Herman Rosa",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00olestie .",
            "Boleto": true
        },
        {
            "Nome": "Arthur Gay",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00",
            "Boleto": false
        },
        {
            "Nome": "Xena Wilkerson",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0010 Proin",
            "Boleto": true
        },
        {
            "Nome": "Lilah Atkins",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00rida e",
            "Boleto": true
        },
        {
            "Nome": "Malik Shepard",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00incidunt .",
            "Boleto": false
        },
        {
            "Nome": "Keely Silva",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0011, 8991 Praesent e",
            "Boleto": false
        },
        {
            "Nome": "Hunter Pate",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0011, 1199 Ante, Road",
            "Boleto": false
        },
        {
            "Nome": "Mikayla Roach",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0080 Donec Rd.",
            "Boleto": true
        },
        {
            "Nome": "Upton Joseph",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0090 Habitant St.",
            "Boleto": true
        },
        {
            "Nome": "Jeanette Pate",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0011, 1180 Amet, St.",
            "Boleto": false
        },
        {
            "Nome": "Kaden Hernandez",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00",
            "Boleto": true
        },
        {
            "Nome": "Kenyon Stevens",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0000, 0180 Grida Rd.",
            "Boleto": false
        },
        {
            "Nome": "Jerome Harper",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00itor Road",
            "Boleto": false
        },
        {
            "Nome": "Jelani Patel",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0001, 1801 Nec .",
            "Boleto": true
        },
        {
            "Nome": "Keaton Oconnor",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0091 Nec,",
            "Boleto": false
        },
        {
            "Nome": "Bree Johnston",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00ulputate enue",
            "Boleto": false
        },
        {
            "Nome": "Maisie Hodges",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0001, 1880 Odio, Rd.",
            "Boleto": false
        },
        {
            "Nome": "Kuame Calhoun",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0009, 0101 Rutrum St.",
            "Boleto": true
        },
        {
            "Nome": "Carlos Cameron",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0080 A, enue",
            "Boleto": false
        },
        {
            "Nome": "Fulton Parsons",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0001, 1101 Sed Rd.",
            "Boleto": false
        },
        {
            "Nome": "Wallace Christian",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00auris enue",
            "Boleto": true
        },
        {
            "Nome": "Caryn Maldonado",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00nummy e",
            "Boleto": false
        },
        {
            "Nome": "Whilemina Frank",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0081, 1918 Egestas. .",
            "Boleto": true
        },
        {
            "Nome": "Emery Moon",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0010 Non Road",
            "Boleto": true
        },
        {
            "Nome": "Price Watkins",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00unc Rd.",
            "Boleto": false
        },
        {
            "Nome": "Lydia Castillo",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00rat, e",
            "Boleto": true
        },
        {
            "Nome": "Lawrence Conway",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0008 Imperdiet St.",
            "Boleto": false
        },
        {
            "Nome": "Kalia Nicholson",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0011, 1001 Tellus Road",
            "Boleto": true
        },
        {
            "Nome": "Brielle Baxter",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0000 Ut, Road",
            "Boleto": true
        },
        {
            "Nome": "Valentine Brady",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00 Road",
            "Boleto": true
        },
        {
            "Nome": "Rebecca Gardner",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00 Road",
            "Boleto": true
        },
        {
            "Nome": "Vladimir Tate",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00on, Rd.",
            "Boleto": true
        },
        {
            "Nome": "Vernon Hays",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00n Rd.",
            "Boleto": true
        },
        {
            "Nome": "Allegra Hull",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00onec St.",
            "Boleto": true
        },
        {
            "Nome": "Hu Hendrix",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00empus e",
            "Boleto": true
        },
        {
            "Nome": "Kenyon Battle",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00ectus St.",
            "Boleto": false
        },
        {
            "Nome": "Gloria Nielsen",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0001 Lorem,",
            "Boleto": true
        },
        {
            "Nome": "Illiana Kidd",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00. .",
            "Boleto": false
        },
        {
            "Nome": "Adria Todd",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00dunt Road",
            "Boleto": false
        },
        {
            "Nome": "Kirsten Mayo",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00rci, enue",
            "Boleto": false
        },
        {
            "Nome": "Willa Hobbs",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0001, 118 Tristique St.",
            "Boleto": false
        },
        {
            "Nome": "Alexis Clements",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0010, 1101 Proin Rd.",
            "Boleto": false
        },
        {
            "Nome": "Akeem Conrad",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00d e",
            "Boleto": true
        },
        {
            "Nome": "Montana Silva",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0000, 9100 Consectetuer St.",
            "Boleto": false
        },
        {
            "Nome": "Kaseem Hensley",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0001 Mauris. .",
            "Boleto": true
        },
        {
            "Nome": "Christopher Morton",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0010, 1011 Sodales enue",
            "Boleto": false
        },
        {
            "Nome": "Wade Fernandez",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00olor. Road",
            "Boleto": true
        },
        {
            "Nome": "Illiana Kirby",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00i e",
            "Boleto": false
        },
        {
            "Nome": "Kimberley Hurley",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0011, 9911 Dictum St.",
            "Boleto": false
        },
        {
            "Nome": "Arthur Olsen",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00get St.",
            "Boleto": false
        },
        {
            "Nome": "Brody Potts",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0090 Sem Road",
            "Boleto": false
        },
        {
            "Nome": "Dillon Ford",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0089 A, .",
            "Boleto": true
        },
        {
            "Nome": "Hannah Juarez",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00n, Rd.",
            "Boleto": true
        },
        {
            "Nome": "Vincent Shaffer",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00St.",
            "Boleto": true
        },
        {
            "Nome": "George Holt",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00Rd.",
            "Boleto": false
        },
        {
            "Nome": "Tobias Bartlett",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00auris St.",
            "Boleto": true
        },
        {
            "Nome": "Xier Hooper",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00nterdum. Rd.",
            "Boleto": false
        },
        {
            "Nome": "Declan Dorsey",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0011 Aenean Road",
            "Boleto": true
        },
        {
            "Nome": "Clementine Tran",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0010, 9801 Eu Rd.",
            "Boleto": true
        },
        {
            "Nome": "Pamela Moody",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00uctus Rd.",
            "Boleto": true
        },
        {
            "Nome": "Julie Leon",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0080 Sem .",
            "Boleto": true
        },
        {
            "Nome": "Shana Nolan",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0001, 899 Eu St.",
            "Boleto": false
        },
        {
            "Nome": "Vaughan Moody",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00d.",
            "Boleto": false
        },
        {
            "Nome": "Randall Reeves",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00treet",
            "Boleto": false
        },
        {
            "Nome": "Dominic Raymond",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0010 Nisi Rd.",
            "Boleto": true
        },
        {
            "Nome": "Lev Pugh",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0000 Auctor enue",
            "Boleto": true
        },
        {
            "Nome": "Desiree Hughes",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00ermentum enue",
            "Boleto": true
        },
        {
            "Nome": "Idona Oneill",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00liquam enue",
            "Boleto": true
        },
        {
            "Nome": "Lani Mayo",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00ristique St.",
            "Boleto": true
        },
        {
            "Nome": "Cathleen Bonner",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00olor .",
            "Boleto": false
        },
        {
            "Nome": "Sydney Murray",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00ringilla St.",
            "Boleto": false
        },
        {
            "Nome": "Brenna Rodriguez",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00diet .",
            "Boleto": true
        },
        {
            "Nome": "Alfreda Mcdaniel",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00liquet Rd.",
            "Boleto": true
        },
        {
            "Nome": "Zachery Atkins",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00uctor. Road",
            "Boleto": true
        },
        {
            "Nome": "Amelia Rich",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0010, 0111 Nunc Rd.",
            "Boleto": false
        },
        {
            "Nome": "Kiayada Witt",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0001 Malesuada enue",
            "Boleto": false
        },
        {
            "Nome": "Lysandra Pierce",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0011 Curabitur St.",
            "Boleto": true
        },
        {
            "Nome": "Cara Rios",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0011 Quam. e",
            "Boleto": true
        },
        {
            "Nome": "Austin Andrews",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-0010, 1101 Sociis Rd.",
            "Boleto": false
        },
        {
            "Nome": "Lillian Peterson",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00nue",
            "Boleto": false
        },
        {
            "Nome": "Adria Beach",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0081, 0111 Nunc enue",
            "Boleto": true
        },
        {
            "Nome": "Oleg Durham",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00unc Rd.",
            "Boleto": false
        },
        {
            "Nome": "Casey Reese",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00ltrices, St.",
            "Boleto": false
        },
        {
            "Nome": "Kane Burnett",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00olor. e",
            "Boleto": false
        },
        {
            "Nome": "Stewart Wilson",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00agittis. .",
            "Boleto": false
        },
        {
            "Nome": "Charity Holcomb",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-00nim. e",
            "Boleto": false
        },
        {
            "Nome": "Kyra Cummings",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0000, 0001 Mus. .",
            "Boleto": false
        },
        {
            "Nome": "Stuart Wallace",
            "Email": "webck@gmail.com",
            "Plano": 1,
            "CPF": "000.000.000-00ed Rd.",
            "Boleto": true
        },
        {
            "Nome": "Carter Clarke",
            "Email": "webck@gmail.com",
            "Plano": 0,
            "CPF": "000.000.000-0001 A",
            "Boleto": false
        }
    ];
    db.users = [
        {
            "ID": "x",
            "Account": "A118A091-0100-01D1-AE11-EEFE00811110",
            "Nome": "Carson Kelley",
            "RegisterDate": "0000-00-00T00:11:10-01:00"
        },
        {
            "Account": "D89FF100-1011-0CE1-C9E1-10EFF011A101",
            "Nome": "Prescott Griffin",
            "RegisterDate": "0011-00-00T01:19:11-08:00"
        },
        {
            "Account": "00FAAD9A-1110-08F0-D00C-901B0108B0F0",
            "Nome": "Amir Saunders",
            "RegisterDate": "0010-08-11T09:11:09-01:00"
        },
        {
            "Account": "EED1011D-1DD9-A100-00A8-10A11ECDBE11",
            "Nome": "Derek Thornton",
            "RegisterDate": "0010-00-01T01:11:01-08:00"
        },
        {
            "Account": "0A0E0D00-FEBD-C001-A111-9AB0CAF1E0F0",
            "Nome": "Fletcher Romero",
            "RegisterDate": "0010-00-01T11:09:10-01:00"
        },
        {
            "Account": "1918F8FA-DFF0-DA0E-0A1D-EB9D081A1080",
            "Nome": "Thaddeus Stein",
            "RegisterDate": "0011-11-10T01:09:01-08:00"
        },
        {
            "Account": "018DBF1A-110E-109A-9011-10FB1F09FA00",
            "Nome": "Nash Knapp",
            "RegisterDate": "0001-00-00T09:11:19-01:00"
        },
        {
            "Account": "10D0EE0B-1A11-1010-F0F0-911EF8C1F901",
            "Nome": "Quamar Vega",
            "RegisterDate": "0011-00-11T00:00:09-01:00"
        },
        {
            "Account": "00E00809-A191-CE80-C1B0-D1CAEB1E1E18",
            "Nome": "Philip Galloway",
            "RegisterDate": "0008-08-01T18:19:18-01:00"
        },
        {
            "Account": "C190181C-DDCC-AF81-DDC0-CA1E811A01A0",
            "Nome": "Mason French",
            "RegisterDate": "0000-11-11T00:18:11-08:00"
        },
        {
            "Account": "1911F001-818A-B191-1888-11111CE0D01F",
            "Nome": "Ross Cortez",
            "RegisterDate": "0010-01-01T11:11:10-01:00"
        },
        {
            "Account": "B8BB18F9-E1A1-A910-080F-E10B0FE108B0",
            "Nome": "Logan King",
            "RegisterDate": "0001-01-08T10:18:00-01:00"
        },
        {
            "Account": "00F010C1-9199-1A0D-1FD1-80B00ADDE000",
            "Nome": "Cedric Leblanc",
            "RegisterDate": "0011-00-10T10:10:10-01:00"
        },
        {
            "Account": "FE880CDD-F0E1-11CB-101C-00C0DE190010",
            "Nome": "Simon Sullivan",
            "RegisterDate": "0011-00-11T10:11:01-01:00"
        },
        {
            "Account": "BBEDD011-E0C1-0810-A1D1-C0EBD0BE0A10",
            "Nome": "Jamal West",
            "RegisterDate": "0001-01-10T00:18:09-08:00"
        },
        {
            "Account": "19BC00FA-C10E-0CC0-9110-10101C111FAC",
            "Nome": "Hector Morales",
            "RegisterDate": "0010-11-01T01:10:10-01:00"
        },
        {
            "Account": "A8090010-0C11-1989-1019-0B81DD011D0C",
            "Nome": "Herrod Hart",
            "RegisterDate": "0008-01-11T19:01:00-01:00"
        },
        {
            "Account": "0081100B-F001-0E1F-EAA1-1FB8F9C011C8",
            "Nome": "Clark Maxwell",
            "RegisterDate": "0000-08-01T08:00:00-01:00"
        },
        {
            "Account": "EA18F010-0F0E-0008-008C-1F11010098AE",
            "Nome": "Reuben Walter",
            "RegisterDate": "0011-01-01T01:11:19-08:00"
        },
        {
            "Account": "0A88C190-EA01-000F-0FE0-F0AE11F11191",
            "Nome": "Ira Ingram",
            "RegisterDate": "0008-08-11T01:11:00-01:00"
        },
        {
            "Account": "0011E811-019C-AD00-10B1-8111E110108E",
            "Nome": "Damian Morrow",
            "RegisterDate": "0011-09-11T01:10:11-01:00"
        },
        {
            "Account": "A0D111C0-9010-B8D0-0181-D00F0BA111BE",
            "Nome": "Macon Farrell",
            "RegisterDate": "0011-01-10T01:01:00-01:00"
        },
        {
            "Account": "B1081DE8-C0FA-1CA0-A8A0-8FA1E910F90A",
            "Nome": "Joel Galloway",
            "RegisterDate": "0001-00-01T00:19:01-08:00"
        },
        {
            "Account": "01D91A8E-91BC-0010-F1D0-0011AAFFD11F",
            "Nome": "Rigel Horton",
            "RegisterDate": "0011-00-00T11:11:11-01:00"
        },
        {
            "Account": "F0D10CC0-11AC-A80E-FD11-EEEFDBD01A10",
            "Nome": "Sylvester Gaines",
            "RegisterDate": "0000-01-10T09:11:11-08:00"
        },
        {
            "Account": "810FCC09-9A01-11BC-0F0E-0CE88108AD1B",
            "Nome": "Abbot Mckay",
            "RegisterDate": "0008-10-00T00:00:11-08:00"
        },
        {
            "Account": "B8DA1910-00A0-FB0E-0011-1F88FD01EF90",
            "Nome": "Solomon Green",
            "RegisterDate": "0011-09-00T01:00:01-01:00"
        }
     ];
}());