const formataCPF = (cpf: any) => {
  cpf = cpf.replace(/[^\d]/g, "");

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const formataDate = (date: any) => {
  date = date.replace(/[^\d]/g, "");

  return date.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  // return date.replate([0-9]{2}/[0-9]{2}/[0-9]{4})
};

const formataCNPJ = (cnpj: any) => {
  cnpj = cnpj.replace(/[^\d]/g, "");

  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  // return cnpj.replace(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "$1.$2.$3-$4");
};

const formataTelefone = (cel: any) => {
  cel = cel.replace(/[^\d]/g, "");

  return cel.replace(
    /([1-9]{2})((?:[2-8]|9[1-9]))([0-9]{3})([0-9]{4})/,
    "($1) $2$3-$4"
  );
};

const formataCep = (cep: any) => {
  cep = cep.replace(/[^\d]/g, "");

  return cep.replace(/([1-9]{1})([0-9]{4})([0-9]{3})/, "$1$2-$3");
};

export { formataCPF, formataDate, formataCNPJ, formataTelefone, formataCep };
