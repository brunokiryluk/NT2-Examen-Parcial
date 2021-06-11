export default {
  name: "src-componentes-formulario",
  components: {},
  props: ['init'],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 3,
      nombreLengthMax: 15,
      notaMin: 0,
      notaMax: 10,
      nombre : null,
      apellido : null,
      notaAlumno : null,
      dataHistory : [],
      notaTotal : 0,
      promedioTotal : 0,
      cantidadAlumnos : 0,
      cont : this.init || 0,
      colorDeFondo : this.validarNotasYDevolverColor()
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        apellido: "",
        notaAlumno: "",
      };
    },
    contar() {
      this.cont++
    },
    getNotaTotal() {

    },
    getPromedioTotal(){
      this.dataHistory.forEach(data => {
        console.log("En la primer posicion de data, el valor de nota es " + data.notaAlumno)
        console.log("Antes de sumar" + this.notaTotal)
        this.notaTotal = this.notaTotal + data.notaAlumno
        console.log("Despues de sumar " +this.notaTotal)
        this.cantidadAlumnos ++
      });
      this.contar();
      this.promedioTotal = this.notaTotal / this.cont;
      return this.promedioTotal;
    },
    getEstilos() {
      return {
        'background-color': this.colorDeFondo,
        color : this.promedioTotal >= 4 && this.promedioTotal <= 6 ? 'black' : 'white'
      }
    },
    validarNotasYDevolverColor() {
      var color;
      if (this.promedioTotal < 4) {
        color = 'red'
      } else if (this.promedioTotal < 7) {
        color = 'yellow'
      } else {
        color = 'green'
      }
      return color
    },
    enviar() {
      //SPREAD Operator
      console.log({ ...this.formData });
      console.log("El nombre es " + this.formData.nombre)
      this.dataHistory.push({
        nombreCompleto : `${this.formData.nombre} ${this.formData.apellido}`,
        notaAlumno : this.formData.notaAlumno
      })
      console.log(this.getPromedioTotal())
      this.notaTotal = 0; //reseteo la variable
      this.colorDeFondo = this.validarNotasYDevolverColor()

      //Borro la información despues de enviarla
      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
};
