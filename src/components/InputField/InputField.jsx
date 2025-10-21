import './InputField.css'

function InputField({label, as, type, name, register, errors}) {

    const id = name;

    if (as === "textarea") {
        return (
            <div className="input-field-wrapper">
                <label htmlFor={id}></label>
                {label}
                <textarea className="input-field-textarea"
                          id={id}
                          {...register(name, {
                              required: {
                                  value: true,
                                  message: "Dit veld is verplicht",
                              },
                              minLength: {
                                  value: 300,
                                  message: "Blog moet minimaal 300 karakters zijn",
                              },
                              maxLength: {
                                  value: 2000,
                                  message: "Blog mag maximaal 2000 karakters zijn",
                              },
                          })}
                />
                {errors[name] && <p className="error-message">{errors[name].message}</p>}
            </div>
        )
    } else {
        return (
            <label className="input-field-wrapper" htmlFor={id}>
                {label}
                <input className="input-field-default"
                       type={type}
                       id={id}
                       {...register(name, {
                           required: {
                               value: true,
                               message: "Dit veld is verplicht",
                           },
                       })}
                />
                {errors[name] && <p className="error-message">{errors[name].message}</p>}
            </label>

        )
    }
}

export default InputField;