import calculateBmi from '../common/calculator';

const BmiForm = (props) => {

  const { height, weight, setHeight, setWeight, setResult } = props;

  return (
    <form>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          className="form-control"
          placeholder="Cm"
          value={height}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="text"
          className="form-control"
          placeholder="Kg"
          value={weight}
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
      </div>

      <button 
        className="btn btn-success w-100"
        type="button"
        onClick={() => {
          const res = calculateBmi(height, weight)
          setResult(res);
        }}
      >
        Calculate
      </button>
    </form>
  );
};

export default BmiForm;
