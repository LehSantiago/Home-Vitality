'use client'
import React from 'react';
import './conteudo.css'; // Importando o CSS global

function Conteudo() {
  return (
<main className="home">
    <header className='conteudo'>
        <main className='bem-vindo'> 
            <div className='vitality'> 
                <p className='texto-bemvindo'>Bem-vindo ao Vitality</p>
                <p className='texto-bemvindo2'>O Vitalily permite que você registre seus sintomas e facilita sua ida ao médico.
</p>
                <button className='obj'> <a className='obj' href='#'>OBJETIVO</a></button>
            </div>
            <div className='img-bem-vindo'>
                <img src='../bemvindo.png' alt='Bem-vindo' />
            </div>
        </main>
        <aside className='explore'> Explore
            <div className='informe'></div>
            <div className='registre'></div>
            <div className='gere'></div>
            <div className='hospitais'></div>
            <p> kssjsj</p>
        </aside>
        <div className='desejamos'>
            <div className='conteudo1'>
                <p> kaka</p>
            </div>
            <div className='conteudo2'>
                <p> kaka</p>
            </div>
            <div className='conteudo3'>
                <p> kaka</p>
            </div>
            <div className='conteudo4'>
                <p> kaka</p>
            </div>
        </div>
        <footer> footer</footer>
    </header>
</main>
  );
}

export default Conteudo;
