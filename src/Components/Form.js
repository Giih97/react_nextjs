
import Styles from './Form.module.css'
function Form() {

    return (
        <div className={Styles.background}>

    <form >
        <label for="fname" className={Styles.label}>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." className={Styles.input}/>

        <label for="lname" className={Styles.label}>Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." className={Styles.input}/>

        <label for="country" className={Styles.label}>Country</label>
         <select id="country" name="country" className={Styles.select}>
            <option value="australia">Brazil</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
        </select>
  
        <button type="submit" value="Submit" className={Styles.button}> Send </button>
    </form>

</div>
    );
  }
   export default Form