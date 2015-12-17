/**
 * Created by JCG-003 on 16/12/2015.
 */
angular.module('rw')
    .service('AlertService',AlertService)

function AlertService(toastr) {

    this.showSucess = showSucess;
    this.showInfo = showInfo;
    this.showError = showError;
    this.showWarning = showWarning;


    function showSucess(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Ok';
        }
        toastr.success(mensagem,titulo);
    }

    function showInfo(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Info';
        }
        toastr.info(mensagem,titulo);
    }

    function showError(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Erro';
        }
        toastr.error(mensagem,titulo);
    }

    function showWarning(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Aviso';
        }
        toastr.warning(mensagem,titulo);
    }
}