import { useState } from "react";

type progressType = 'pending' | 'started' | 'done';

function App() {
  const [progress, setProgress] = useState<progressType>('pending');
  const [textarea, setTextarea] = useState<string>('');
  const [chat, setChat] = useState<string[]>([]);

  function handleSubmitChat() {
    // Verifica se o textarea está vazio
    if (!textarea.trim()) {
      return;
    }

    // Log o conteúdo digitado no console
    console.log('Texto enviado:', textarea);

    // Se estiver no estado 'pending', muda para 'started' e limpa o textarea
    if (progress === 'pending') {
      setChat(text => [...text, textarea])
      setChat(text => [...text, 'Aqui sera a pergunta gerada pela IA.'])

      setProgress('started');
    }

    // Limpar textarea após enviar
    setTextarea('');
  }

  const startStudy = () => {
    setProgress('started');
  };

  return (
    <div className="container">
      <div className="sidebar">
        <details open className="suggestion">
          <summary>Tópicos Sugeridos</summary>
          <button onClick={startStudy}>HTML</button>
          <button onClick={startStudy}>CSS</button>
          <button onClick={startStudy}>JavaScript</button>
          <button onClick={startStudy}>TypeScript</button>
        </details>

        <details open className="historic">
          <summary>Histórico</summary>
          <button>Java</button>
          <button>PHP</button>
        </details>
      </div>

      <div className="content">
        {progress === 'pending' && (
          <div className="box-home">
            <span>Olá, eu sou o</span>
            <h1>Prates <span>.me</span></h1>
            <p>
              Estou aqui para te ajudar nos seus estudos.
              Selecione um dos tópicos sugeridos ao lado
              ou digite um tópico que deseja estudar para
              começarmos.
            </p>
          </div>
        )}

        {progress === 'started' && (
          <div className="box-chat">
            <h1>Você está estudando sobre <span>HTML</span></h1>
            {/* A pergunta será removida assim que o formulário for enviado */}
          </div>
        )}

        <div className="box-input">
          <div>
            <textarea
              value={textarea}
              onChange={element => setTextarea(element.target.value)}
              placeholder={
                progress === 'started' ? "Insira sua resposta..." : "Insira o tema que deseja estudar..."
              }
            />
            <button onClick={handleSubmitChat}>
              {progress === 'pending' ? 'Enviar Pergunta' : 'Enviar resposta'}
            </button>
          </div>
        </div>

        <div className="box-footer">
          <p>Prates <span>.me</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
