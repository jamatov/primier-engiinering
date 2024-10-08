import React, { useState } from 'react'
import axios from "axios";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../Constants";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [model, setModel] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Ismi: ${name}.%0ATelefon raqami: ${phone}`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Требуется номер телефона. Попробуйте еще раз.");
      setIsLoading(false);
    } else {
      const { data } = axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );

      toast.success(`Завершено успешно. Дождитесь обратного звонка!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };

  return (
    <section className='Form'>
      <div className="container">
        <form onSubmit={sendFeedback} className='zayafka' action="">
          <h2>Есть вопросы или хотите сотрудничать?</h2>
          <p>Оставьте заявку и мы перезвоним вам в течение дня</p>

          <div className='input-body'>
            <input  placeholder='Ваше имя' type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name" />
            <InputMask
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+998 (99) 999-99-99"
                  maskChar=""
                  id="phone"
                  type="text"
                  placeholder="+998 (_) _ _ _"
                />
                <button  disabled={isLoading} type="submit">
              {" "}
              {isLoading && (
                <i className="spinner-border spinner-border-sm text-white me-2"></i>
              )}
              Отправить
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}
