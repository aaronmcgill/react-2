
const FormBmi = () => {
    return (
        <form>
        <div>
          <label for="height">Height:</label>
          <input id="height" type="text" class="form-control" placeholder="Cm">
        </div>
    
        <div>
          <label for="weight">Weight:</label>
          <input id="weight" type="text" class="form-control" placeholder="Kg">
        </div>
    
        <button class="btn btn-success w-100">Calculate</button>
      </form>


    )
};

export default BmiForm;
