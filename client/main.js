$(document).ready(function () {
    fetchPokemons()
})

function fetchPokemons () {
    $.ajax({
        url : 'http://localhost:3000/pokemons',
        method : 'GET'
    })
        .done(({data})=>{            
            for (let i = 0; i < data.length; i++) {
                $('.pokemon-container').append(`
                    <div class="pokemon-card">
                        <img onclick="document.getElementById('dialog-rounded${data[i].national_number}').showModal();" class="poke-gif" src="${data[i].animated}" alt="pokemon git">
                    </div>
                    <section>
                    <dialog class="nes-dialog is-rounded" id="dialog-rounded${data[i].national_number}">
                      <form method="dialog">
                        <div class="with-title is-centered">
                            <p class="title">${data[i].name}</p>
                            <div class="nes-table-responsive">
                                <table class="nes-table is-bordered is-centered">
                                <thead>
                                    <tr>
                                    <th>hp</th>
                                    <th>attack</th>
                                    <th>defense</th>
                                    <th>speed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>${data[i].hp}</td>
                                    <td>${data[i].attack}</td>
                                    <td>${data[i].defense}</td>
                                    <td>${data[i].speed}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <menu class="dialog-menu" style="margin-top:10px;">
                          <button class="nes-btn">Cancel</button>
                        </menu>
                      </form>
                    </dialog>
                  </section>
                `)
            }
        })
}