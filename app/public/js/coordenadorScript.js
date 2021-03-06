$(document).ready(function () {
    $("#btnSair").on("click", function () {
		window.location.href = "/autenticar/sair";
	});
    
    $(".btnDeletarCoordenador").on("click", function () {
        let resposta = confirm("Deseja realmente deletar?");
        if (resposta) {
            if (this.value != "") {
                var valor = this.value;
                $.ajax({
                    url: "/coordenador/" + valor,
                    type: "DELETE"
                })
                .done(function () {
                    window.location.href = "/coordenador";
                });
            }
        }
    });

    $(".btnAtualizarCoordenador").on("click", function () {
        let resposta = confirm("Deseja realmente atualizar?");
        if (resposta) {
            let valor = this.value;
            $.ajax({
                url: "/coordenador/" + valor,
                type: "GET",
                success: function (data) {
                    $("#id").val(data.id);
                    $("#nome").val(data.nome);
                    $("#sobrenome").val(data.sobrenome);
                    if (Boolean(data.ativo)) {
                        $("#ativo").prop("checked", true);
                    } else {
                        $("#ativo").prop("checked", false);
                    }
                }
            });
        }
    });

    $("#frmCoordenador").on("submit", function (e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            url: "/coordenador",
            type: "POST",
            data: {
                id: form.find("input[name='id']").val(),
                nome: form.find("input[name='nome']").val(),
                sobrenome: form.find("input[name='sobrenome']").val(),
                ativo: form.find("input[name='ativo']").prop("checked") ? true : false
            }
        })
        .done(function () {
            window.location.href = "/coordenador";
        });
    });
});