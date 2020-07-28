window.onload = function data(){
    hoje = new Date

    diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]
    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    // document.write (diasSemana[hoje.getDay()-1] + ", " + hoje.getDate() + " de " + meses[hoje.getMonth()] + " de " + hoje.getFullYear() )

    dia = diasSemana[hoje.getDay()-1]
    dataDia = hoje.getDate()
    dataMes = meses[hoje.getMonth()]
    dataAno = hoje.getFullYear()

    document.getElementById('conteudo').innerHTML = '<h1 id="diaS"> ' + dia + '</h1>'
    document.getElementById('conteudo').innerHTML += '<h1 id="diaS"> Dia ' + dataDia + ' de ' + dataMes + ' de ' + dataAno + '</h1>'
    document.getElementById('conteudo').innerHTML += '<div id="relogio"></div>'

    citacoes = ['Não acredito em destino. Porque não gosto da idéia de não poder controlar minha vida',
                'Há uma grande diferença entre saber o caminho e percorrer o caminho',
                'Não pense que é capaz. Saiba que é',
                'Cedo ou tarde você descobrirá a diferença entre saber o caminho e percorrer o caminho',
                'A colher não existe',
                'Eu lhe mostro a porta, mas é você que tem que atravessá-la',
                'Tudo o que tem um começo tem um fim',
                'Vivemos em uma realidade programada',
                'Você precisa entender, a maioria destas pessoas não está preparada para despertar. E muitas delas estão tão inertes, tão desesperadamente dependentes do sistema, que irão lutar para protegê-lo.',
                'Já tiveste algum sonho do qual estivesses certo que fosse real? E se fosses incapaz de acordar desse sonho? Como conseguirias distinguir a diferença entre o mundo do sonho e o mundo real?',
                'Notável como o amor tem um padrão similar ao da insanidade',
                'Na vida real, a única pilula que tira alguém da Matrix é o conhecimento',
                'Às vezes na vida, nós nos sentimos acorrentados. Sem sequer sabermos que temos a chave',
                'Buscando ser feliz, cada um cria em torno de si sua própria Matrix',
                'Vivemos uma matrix trabalhista aonde dizem; trabalhem mais filhos do Brasil, e pensem menos, e eu me pergunto; quem faz isso? O sistema']
                fraseSelecionada = citacoes[Math.floor(Math.random() * citacoes.length)]
    document.getElementById('conteudo').innerHTML += '<div id="frase">'+ fraseSelecionada +'</div>'

    setInterval(function(){        
        fraseSelecionada = citacoes[Math.floor(Math.random() * citacoes.length)]
        document.getElementById('frase').innerHTML = fraseSelecionada
    }, 1000)
}




