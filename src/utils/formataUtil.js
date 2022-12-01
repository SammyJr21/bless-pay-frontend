class FormataUtils {
  static formatarMaskCpf(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return value;
  }

  static formatarMaskCNPJ(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
    return value;
  }

  static maskFone(value) {
    let r = value.replace(/\D/g, '');
    r = r.replace(/^0/, '');
    if (r.length > 12) {
      r = r.replace(/^(\d\d)(\d\d)(\d{5})(\d{4}).*/, '+$1 ($2) $3-$4');
    } else if (r.length > 9) {
      r = r.replace(/^(\d\d)(\d\d)(\d{4})(\d{0,4}).*/, '+$1 ($2) $3-$4');
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d\d)(\d{0,5})/, '+$1 ($2) $3');
    } else if (r.length > 4) {
      r = r.replace(/^(\d\d)(\d*)/, '+$1 ($2');
    } else if (r.length >= 1) {
      r = r.replace(/^(\d*)/, '+$1');
    } else if (r.length === 0) {
      r = '+';
    }
    return r;
  }

  static removeMask(value) {
    let regex = /[^0-9]+/g;
    return value.charAt(0) === '+'
      ? `+${value.replace(regex, '')}`
      : value.replace(regex, '');
  }
}
export default FormataUtils;
