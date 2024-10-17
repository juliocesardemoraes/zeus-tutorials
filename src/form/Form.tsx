import React, { memo, useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    option: "",
  });

  const handleOptionChange = (e) => {
    setFormData({ ...formData, option: e.target.id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataValues = new FormData(e.target);
    console.log("Form submitted with data: ", formDataValues);
    console.log(formDataValues.get("name"));
    const name = formDataValues.get("name");
  };

  console.log("Form Renderizado!");

  return (
    <section className="bg-gray-100 min-h-[100vh]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h1 className="text-3xl font-bold">SUGESTÃO ZEUS 💻</h1>
            <p className="max-w-xl text-lg mt-4">
              Este site foi feito para que você pudesse opinar nos próximos
              conteúdos produzidos pela ZEUS
            </p>

            <h2 className="max-w-xl text-lg mt-12">
              Digite seus dados no formulário para sugerir o próximo tema da{" "}
              <b>ZEUS</b>
            </h2>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nome
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nome"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Endereço de Email"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Número de Telefone"
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="JS"
                    className={`block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black ${
                      formData.option === "JS" ? "bg-black text-white" : ""
                    }`}
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="JS"
                      type="radio"
                      name="option"
                      checked={formData.option === "JS"}
                      onChange={handleOptionChange}
                    />
                    <span className="text-sm">JS</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="HTMLCSS"
                    className={`block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black ${
                      formData.option === "HTMLCSS" ? "bg-black text-white" : ""
                    }`}
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="HTMLCSS"
                      type="radio"
                      name="option"
                      checked={formData.option === "HTMLCSS"}
                      onChange={handleOptionChange}
                    />
                    <span className="text-sm"> HTML + CSS </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="React"
                    className={`block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black ${
                      formData.option === "React" ? "bg-black text-white" : ""
                    }`}
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="React"
                      type="radio"
                      name="option"
                      checked={formData.option === "React"}
                      onChange={handleOptionChange}
                    />
                    <span className="text-sm"> React </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Mensagem
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Mensagem"
                  rows={8}
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Enviar sugestão
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
