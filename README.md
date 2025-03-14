# PortfolioGrok

Vou criar um **portfólio** para um **analista de sistemas** usando **HTML, CSS, JavaScript** e **Bootstrap**, com um botão de contato integrado ao **WhatsApp**. O portfólio terá seções como "Sobre Mim", "Habilidades", "Projetos" e "Contato", com um design limpo, responsivo e profissional.

---

### **Estrutura do Projeto**
Crie uma pasta chamada `portfolio-analista` com três arquivos:
- `index.html`
- `styles.css` (para estilos personalizados)
- `script.js`

---

#### **1. index.html**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio - João Silva, Analista de Sistemas</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">João Silva</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#sobre">Sobre</a></li>
                    <li class="nav-item"><a class="nav-link" href="#habilidades">Habilidades</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projetos">Projetos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-primary text-white text-center py-5" id="sobre">
        <div class="container">
            <h1 class="display-4">João Silva</h1>
            <p class="lead">Analista de Sistemas | Desenvolvedor de Soluções Tecnológicas</p>
            <a href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" 
               target="_blank" class="btn btn-light btn-lg mt-3">Fale comigo no WhatsApp</a>
        </div>
    </header>

    <!-- Habilidades -->
    <section class="container my-5" id="habilidades">
        <h2 class="text-center mb-4">Habilidades</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h5 class="card-title">Desenvolvimento Web</h5>
                        <p class="card-text">HTML, CSS, JavaScript, React, Node.js</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h5 class="card-title">Análise de Sistemas</h5>
                        <p class="card-text">Levantamento de requisitos, UML, BPMN</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h5 class="card-title">Banco de Dados</h5>
                        <p class="card-text">SQL, MySQL, MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projetos -->
    <section class="bg-light py-5" id="projetos">
        <div class="container">
            <h2 class="text-center mb-4">Projetos</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">Sistema de Gestão</h5>
                            <p class="card-text">Desenvolvi um sistema interno para controle de estoque usando Node.js e React.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">App Mobile</h5>
                            <p class="card-text">Criei um aplicativo de tarefas com React Native e integração com API REST.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section class="container my-5" id="contato">
        <h2 class="text-center mb-4">Contato</h2>
        <form id="contact-form" class="col-md-6 mx-auto">
            <div class="mb-3">
                <input type="text" class="form-control" id="name" placeholder="Seu Nome" required>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Seu E-mail" required>
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="message" rows="4" placeholder="Sua Mensagem" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Enviar</button>
        </form>
        <p id="form-message" class="mt-3 text-success text-center d-none">Mensagem enviada com sucesso!</p>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
        <p>© 2025 João Silva. Todos os direitos reservados.</p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

---

#### **2. styles.css**
```css
/* Estilos personalizados */
body {
    font-family: 'Arial', sans-serif;
    color: #333;
}

.bg-primary {
    background: linear-gradient(to right, #007bff, #00c4cc);
}

.navbar-brand {
    font-weight: bold;
}

.card {
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.btn-primary {
    background-color: #007bff;
    border: none;
}

.btn-primary:hover {
    background-color: #0056b3;
}
```

---

#### **3. script.js**
```javascript
// Lógica do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const formMessage = document.getElementById('form-message');
        formMessage.classList.remove('d-none'); // Exibe a mensagem de sucesso
        this.reset(); // Limpa o formulário
    }
});
```

---

### **Como Funciona**
1. **HTML com Bootstrap:**
   - **Navbar:** Menu de navegação fixo com links para as seções.
   - **Header:** Apresentação com botão WhatsApp (substitua `5511999999999` pelo número real).
   - **Habilidades:** Cards exibindo competências.
   - **Projetos:** Exemplos de trabalhos em cards.
   - **Contato:** Formulário simples com mensagem de sucesso.
   - **Footer:** Rodapé fixo.
2. **CSS Personalizado:**
   - Gradiente no header, animação nos cards e ajustes de cores.
3. **JavaScript:**
   - Validação básica do formulário e feedback visual.

---

### **Integração com WhatsApp**
- O botão no header usa a URL do WhatsApp:
  ```
  https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!
  ```
- **Personalize:**
  - Troque `5511999999999` pelo número real (DDD + número, sem espaços ou símbolos).
  - Edite o texto após `?text=` para a mensagem desejada.

---

### **Como Testar**
1. Crie a pasta `portfolio-analista`.
2. Copie os códigos nos arquivos correspondentes (`index.html`, `styles.css`, `script.js`).
3. Abra o `index.html` no navegador (necessita de internet para o Bootstrap CDN).

---

### **Resultado**
- Um portfólio profissional para um analista de sistemas com:
  - Navegação fluida e responsiva (Bootstrap).
  - Botão de WhatsApp para contato direto.
  - Seções organizadas e visual atrativo.

---

### **Personalização**
- **Nome:** Substitua "João Silva" pelo seu nome.
- **Habilidades/Projetos:** Adicione suas próprias competências e trabalhos.
- **Foto:** Inclua uma imagem com `<img>` no header ou em "Sobre".
- **Backend:** Integre o formulário a uma API para enviar e-mails.

Se precisar de ajustes ou quiser adicionar mais funcionalidades (ex.: modal, galeria), é só avisar!
 
