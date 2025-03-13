const nombre = document.getElementById("nombre");
const provincia = document.getElementById("provincia");
const ciudad = document.getElementById("ciudad");
const sector = document.getElementById("sector");
const calle = document.getElementById("calle");
const carrera = document.getElementById("carrera");
const Container = document.getElementById("PI-container");

function validate() {
    let isValid = true;

    isValid = validateInputs("#nombre", isValid);
    isValid = validateInputs("#provincia", isValid);
    isValid = validateInputs("#ciudad", isValid);
    isValid = validateInputs("#sector", isValid);
    isValid = validateInputs("#calle", isValid);
    isValid = validateInputs("#carrera", isValid);

    return isValid;
}

function validateInputs(selector, isValid) {
    const inputs = document.querySelectorAll(selector);
    let allValid = isValid;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("input-error");
            allValid = false;
        } else {
            input.classList.remove("input-error");
        }
    });

    return allValid;
}

function selection(){
    createSelection();
}

function createSelection() {
    if (validate()) {
        const divcol4 = document.createElement("div");
        divcol4.setAttribute("class", "mb-3 row card");

        const cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header bg-success text-light text-center");

        const h3Header = document.createElement("h3");
        h3Header.textContent = "Selección de materias";

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body p-4");

        const materiasSeleccionadas = [];
        
        switch (carrera.value) {
            case "Software":
                agregarMateria("Introducción a la elaboración de algoritmos", ["Lunes 8:00 AM - 12:00 PM", "Jueves 2:00 PM - 6:00 PM", "Viernes 2:00 PM - 6:00 PM"]);
                agregarMateria("Fundamentos de programación", ["Lunes 2:00 PM - 6:00 PM", "Jueves 6:00 PM - 10:00 PM"]);
                agregarMateria("Introducción a las bases de datos", ["Miercoles 2:00 PM - 6:00 PM", "Viernes 6:00 PM - 10:00 PM"]);
                agregarMateria("Programación 1", ["Martes 2:00 PM - 6:00 PM", "Sabados 6:00 PM - 10:00 PM"]);
                agregarMateria("Programación 2", ["Martes 8:00 AM - 12:00 PM", "Sabados 2:00 PM - 6:00 PM"]);
                break;
            case "Multimedia":
                agregarMateria("Ilustración", ["Lunes 8:00 AM - 12:00 PM", "Jueves 2:00 PM - 6:00 PM", "Viernes 2:00 PM - 6:00 PM"]);
                agregarMateria("Animación 2D", ["Lunes 2:00 PM - 6:00 PM", "Jueves 6:00 PM - 10:00 PM"]);
                agregarMateria("Desktop Publishing", ["Miercoles 2:00 PM - 6:00 PM", "Viernes 6:00 PM - 10:00 PM"]);
                agregarMateria("Motion Graphics", ["Martes 2:00 PM - 6:00 PM", "Sabados 6:00 PM - 10:00 PM"]);
                agregarMateria("Graficos Vectoriales", ["Martes 8:00 AM - 12:00 PM", "Sabados 2:00 PM - 6:00 PM"]);
                break;
            case "CiberSeguridad":
                agregarMateria("Fundamentos de enrutamiento", ["Lunes 8:00 AM - 12:00 PM", "Jueves 2:00 PM - 6:00 PM", "Viernes 2:00 PM - 6:00 PM"]);
                agregarMateria("Seguridad de sistemas operativos", ["Lunes 2:00 PM - 6:00 PM", "Jueves 6:00 PM - 10:00 PM"]);
                agregarMateria("Hacker Etico 1", ["Miercoles 2:00 PM - 6:00 PM", "Viernes 6:00 PM - 10:00 PM"]);
                agregarMateria("Sistemas Operativos", ["Martes 2:00 PM - 6:00 PM", "Sabados 6:00 PM - 10:00 PM"]);
                agregarMateria("Redes de Datos", ["Martes 8:00 AM - 12:00 PM", "Sabados 2:00 PM - 6:00 PM"]);
                break;
            case "VideoJuegos":
                agregarMateria("Diseño de Niveles", ["Lunes 8:00 AM - 12:00 PM", "Jueves 2:00 PM - 6:00 PM", "Viernes 2:00 PM - 6:00 PM"]);
                agregarMateria("Introducción a la producción digital", ["Lunes 2:00 PM - 6:00 PM", "Jueves 6:00 PM - 10:00 PM"]);
                agregarMateria("Diseños de Sprites y Graficos 2D", ["Miercoles 2:00 PM - 6:00 PM", "Viernes 6:00 PM - 10:00 PM"]);
                agregarMateria("Segmentación de usuario", ["Martes 2:00 PM - 6:00 PM", "Sabados 6:00 PM - 10:00 PM"]);
                agregarMateria("Programación de simulaciones", ["Martes 8:00 AM - 12:00 PM", "Sabados 2:00 PM - 6:00 PM"]);
                break;
            case "Redes":
                agregarMateria("Instalación de Redes", ["Lunes 8:00 AM - 12:00 PM", "Jueves 2:00 PM - 6:00 PM", "Viernes 2:00 PM - 6:00 PM"]);
                agregarMateria("Desarrollo de Emprendedores", ["Lunes 2:00 PM - 6:00 PM", "Jueves 6:00 PM - 10:00 PM"]);
                agregarMateria("Inglés 10-12", ["Miercoles 2:00 PM - 6:00 PM", "Viernes 6:00 PM - 10:00 PM"]);
                agregarMateria("Introducción a la producción digital", ["Martes 2:00 PM - 6:00 PM", "Sabados 6:00 PM - 10:00 PM"]);
                agregarMateria("Enrutamiento Avanzado", ["Martes 8:00 AM - 12:00 PM", "Sabados 2:00 PM - 6:00 PM"]);
                break;
        }

        function agregarMateria(nombre, horarios) {
            const cardMateria = document.createElement("div");
            cardMateria.setAttribute("class", "mb-3 row card");

            const materiaHeader = document.createElement("div");
            materiaHeader.setAttribute("class", "card-header bg-primary text-light text-center rounded");

            const h5Header = document.createElement("h5");
            h5Header.textContent = nombre;

            const materiaBody = document.createElement("div");
            materiaBody.setAttribute("class", "card-body p-4");
            materiaBody.setAttribute("id", "materiaBody")

            const divHorario = document.createElement("div");
            divHorario.setAttribute("class", "mb-2");

            const labelHorario = document.createElement("label");
            labelHorario.setAttribute("class", "form-label fw-bold");
            labelHorario.textContent = "Horarios de la materia";

            divHorario.appendChild(labelHorario);
            materiaBody.appendChild(divHorario);

            horarios.forEach((horario, index) => {
                const divRadio = document.createElement("div");
                divRadio.setAttribute("class", "mb-2");

                const radio = document.createElement("input");
                radio.setAttribute("type", "radio");
                radio.setAttribute("id", `${nombre} ${index}`);
                radio.setAttribute("name", `dia ${nombre}`);
                radio.value = horario;

                const label = document.createElement("label");
                label.setAttribute("class", "form-label ms-1 me-3");
                label.setAttribute("for", `${nombre} ${index}`);
                label.textContent = horario;

                divRadio.appendChild(radio);
                divRadio.appendChild(label);
                materiaBody.appendChild(divRadio);
            });

            materiaHeader.appendChild(h5Header);
            cardMateria.appendChild(materiaHeader);
            cardMateria.appendChild(materiaBody);
            cardBody.appendChild(cardMateria);
        }

        const btnVolverAtras = document.createElement("button");
        btnVolverAtras.setAttribute("class", "btn btn-warning mt-2 float-end ms-3");
        btnVolverAtras.textContent = "Volver Atrás";
        btnVolverAtras.type = "button";
        btnVolverAtras.addEventListener("click", function (){
            createPersonalInfoCard();
        });

        const btnAceptar = document.createElement("button");
        btnAceptar.textContent = "Aceptar";
        btnAceptar.setAttribute("class", "btn btn-success float-end ms-3 mt-2");
        btnAceptar.addEventListener("click", () => {
            materiasSeleccionadas.length = 0;

            document.querySelectorAll("#materiaBody").forEach((materia) => {
                const nombreMateria = materia.previousElementSibling.textContent.trim();
                const horarioSeleccionado = materia.querySelector("input[type='radio']:checked");
                
                if (horarioSeleccionado) {
                    materiasSeleccionadas.push({
                        materia: nombreMateria,
                        horario: horarioSeleccionado.value
                    });
                }
            });

            createConfirmation(materiasSeleccionadas);
        });

        cardHeader.appendChild(h3Header);
        cardBody.appendChild(btnAceptar);
        cardBody.appendChild(btnVolverAtras);
        divcol4.appendChild(cardHeader);
        divcol4.appendChild(cardBody);

        Container.replaceChildren(divcol4);
    }
}

    function createPersonalInfoCard() {
        const card = `
            <div class="card personal-info mt-4 mb-5">
                <div class="card-header bg-dark text-light text-center rounded">
                    <h5>Información personal</h5>
                </div>
        
                <div class="card-body personal-info p-4">
                    <div class="mb-3 ms-1 me-1 row nombre">
                        <label for="nombre" class="form-label fw-bold">Nombre completo</label>
                        <input type="text" name="nombre-input" id="nombre" class="input-nombre" value="${nombre.value}">
                    </div>
        
                    <div class="mb-3 ms-1 me-1 row provincia">
                        <label for="provincia" class="form-label fw-bold">Provincia</label>
                        <input type="text" name="provincia-input" id="provincia" class="input-provincia" value="${provincia.value}">
                    </div>
        
                    <div class="mb-3 ms-1 me-1 row ciudad">
                        <label for="ciudad" class="form-label fw-bold">Ciudad</label>
                        <input type="text" name="ciudad-input" id="ciudad" class="input-ciudad" value="${ciudad.value}">
                    </div>
    
                    <div class="mb-3 ms-1 me-1 row sector">
                        <label for="sector" class="form-label fw-bold">Sector</label>
                        <input type="text" name="sector-input" id="sector" class="input-sector" value="${sector.value}">
                    </div>
        
                    <div class="mb-3 ms-1 me-1 row calle">
                        <label for="calle" class="form-label fw-bold">Calle</label>
                        <input type="text" name="calle-input" id="calle" class="input-calle" value="${calle.value}">
                    </div>
        
                    <div class="mb-3 ms-1 me-1 row carrera">
                        <label for="carrera" class="form-label fw-bold">Carrera</label>
                        <select name="carrera-select" id="carrera" class="select-carrera">
                            <option value="">Seleccione una carrera</option>
                            <option value="Software" ${carrera.value === 'Software' ? 'selected' : ''}>Software</option>
                            <option value="Multimedia" ${carrera.value === 'Multimedia' ? 'selected' : ''}>Multimedia</option>
                            <option value="CiberSeguridad" ${carrera.value === 'CiberSeguridad' ? 'selected' : ''}>CiberSeguridad</option>
                            <option value="VideoJuegos" ${carrera.value === 'VideoJuegos' ? 'selected' : ''}>VideoJuegos</option>
                            <option value="Redes" ${carrera.value === 'Redes' ? 'selected' : ''}>Redes</option>
                        </select>
                    </div>
                    <div class="mb-3 ms-1 me-2">
                    <button id="registrar" type="button" onclick="selection()" class="btn btn-success text-light float-end ms-3">Registrar</button>
                    <button id="limpiar" type="button" onclick="limpiarInputs()" class="btn btn-warning text-dark float-end">Limpiar</button>
                    </div>
                </div>
            </div>
        `;

        Container.innerHTML = card;

        document.getElementById('nombre').addEventListener('input', (e) => {
            nombre.value = e.target.value;
        });
        document.getElementById('provincia').addEventListener('input', (e) => {
            provincia.value = e.target.value;
        });
        document.getElementById('ciudad').addEventListener('input', (e) => {
            ciudad.value = e.target.value;
        });
        document.getElementById('sector').addEventListener('input', (e) => {
            sector.value = e.target.value;
        });
        document.getElementById('calle').addEventListener('input', (e) => {
            calle.value = e.target.value;
        });
        document.getElementById('carrera').addEventListener('change', (e) => {
            carrera.value = e.target.value;
        });
    }

    function createConfirmation(materiasSeleccionadas) {
        
    let tableContent = `
            <div class="table-responsive">
                <table class="table table-bordered table-striped w-auto">
                    </colgroup>
                    <thead class="table-dark text-center">
                        <tr>
                            <th>Asignatura</th>
                            <th>Lu</th>
                            <th>Ma</th>
                            <th>Mi</th>
                            <th>Ju</th>
                            <th>Vi</th>
                            <th>Sa</th>
                        </tr>
                    </thead>
                    <tbody>`;

    materiasSeleccionadas.forEach(materia => {
        let horariosPorDia = {
            "Lunes": "", "Martes": "", "Miercoles": "", "Jueves": "", "Viernes": "", "Sabados": ""
        };

        const regex = /^(Lunes|Martes|Miercoles|Jueves|Viernes|Sabados)/;
        const match = materia.horario.match(regex);
        if (match) {
            const dia = match[0];
            horariosPorDia[dia] = materia.horario.replace(dia, "").trim();
        }

        tableContent += `
            <tr>
                <td><strong>${materia.materia}</strong></td>
                <td>${horariosPorDia["Lunes"]}</td>
                <td>${horariosPorDia["Martes"]}</td>
                <td>${horariosPorDia["Miercoles"]}</td>
                <td>${horariosPorDia["Jueves"]}</td>
                <td>${horariosPorDia["Viernes"]}</td>
                <td>${horariosPorDia["Sabados"]}</td>
            </tr>`;
    });

    tableContent += `</tbody></table></div>`;

    const card = `
        <div class="mb-3 row card">
            <div class="card-header bg-success text-light text-center">
                <h3>Confirmación de datos de selección</h3>
            </div>
            <div class="card-body p-4">
                <div class="card personal-infomb-3 mb-3">
                    <div class="card-header bg-primary text-light text-center rounded">
                        <h5>Datos básicos del estudiante</h5>
                    </div>
                    <div class="card-body personal-info p-4">
                        <div class="mb-3 ms-1 me-1 row nombre">
                            <label class="form-label fw-bold">Nombre completo: ${nombre.value}</label>
                        </div>
                        <div class="mb-3 ms-1 me-1 row provincia">
                            <label class="form-label fw-bold">Provincia: ${provincia.value}</label>
                        </div>
                        <div class="mb-3 ms-1 me-1 row ciudad">
                            <label class="form-label fw-bold">Ciudad: ${ciudad.value}</label>
                        </div>
                        <div class="mb-3 ms-1 me-1 row sector">
                            <label class="form-label fw-bold">Sector: ${sector.value}</label>
                        </div>
                        <div class="mb-3 ms-1 me-1 row calle">
                            <label class="form-label fw-bold">Calle: ${calle.value}</label>
                        </div>
                        <div class="mb-3 ms-1 me-1 row carrera">
                            <label class="form-label fw-bold">Carrera: ${carrera.value}</label>
                        </div>
                    </div>
                </div>

                ${tableContent}

                <div class="mb-3 ms-1 me-2">
                    <button id="registrar" type="button" onclick="finalizar()" class="btn btn-success text-light float-end ms-3">Confirmar</button>
                    <button id="limpiar" type="button" onclick="selection()" class="btn btn-warning text-dark float-end">Volver atrás</button>
                </div>
            </div>
        </div>
    `;

    Container.innerHTML = card;
    }

    function finalizar(){
        const confirmacion = confirm("Está seguro que desea confirmar su inscripción?");
        if(confirmacion == true){
            createPersonalInfoCard();
            limpiarInputs();
        }
    }

function limpiarInputs(){

    nombre.value="";
    provincia.value="";
    ciudad.value="";
    sector.value="";
    calle.value="";
    carrera.value="";

    limpiarInputsDinamicos("#nombre");
    limpiarInputsDinamicos("#provincia");
    limpiarInputsDinamicos("#ciudad");
    limpiarInputsDinamicos("#sector");
    limpiarInputsDinamicos("#calle");
    limpiarInputsDinamicos("#carrera");
}

function limpiarInputsDinamicos(input){
    const inputs = document.querySelectorAll(input);

    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            input.value = "";
        } else {
            input.classList.remove("input-error");
        }
    });
}