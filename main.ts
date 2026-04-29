import './src/style.css';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  tag: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

interface Stat {
  value: string;
  label: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Casa Moderna com Piscina',
    location: 'Jardim Europa, São Paulo',
    price: 'R$ 1.250.000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Venda',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
  },
  {
    id: 2,
    title: 'Apartamento Luxo Centro',
    location: 'Centro, Rio de Janeiro',
    price: 'R$ 890.000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Venda',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
  },
  {
    id: 3,
    title: 'Cobertura Duplex Vista Mar',
    location: 'Copacabana, Rio de Janeiro',
    price: 'R$ 2.800.000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Venda',
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
  },
  {
    id: 4,
    title: 'Kitchenette Mobiliada',
    location: 'Pinheiros, São Paulo',
    price: 'R$ 2.500/mês',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18f6b8b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Aluguel',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
  },
  {
    id: 5,
    title: 'Sala Comercial Avenida',
    location: 'Av. Paulista, São Paulo',
    price: 'R$ 5.500/mês',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Aluguel',
    bedrooms: 0,
    bathrooms: 2,
    area: 120,
  },
  {
    id: 6,
    title: 'Casa de Campo com Lago',
    location: 'Campos do Jordão, SP',
    price: 'R$ 1.950.000',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Venda',
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
  },
];

const stats: Stat[] = [
  { value: '500+', label: 'Imóveis Vendidos' },
  { value: '300+', label: 'Clientes Satisfeitos' },
  { value: '15', label: 'Anos de Experiência' },
  { value: '50+', label: 'Corretores' },
];

function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="container">
      <div class="logo">
        <span class="logo-icon">🏠</span>
        Prime Imóveis
      </div>
      <nav class="nav">
        <a href="#properties">Imóveis</a>
        <a href="#stats">Estatísticas</a>
        <a href="#contact" class="btn-contato">Fale Conosco</a>
      </nav>
    </div>
  `;
  return header;
}

function createHero(): HTMLElement {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="container">
      <h1>Encontre o Imóvel dos Seus Sonhos</h1>
      <p>Há mais de 15 anos ajudando famílias a encontrar o lar perfeito. Confiança e qualidade em cada negociação.</p>
      <div class="hero-buttons">
        <a href="#properties" class="btn btn-primary">Ver Imóveis</a>
        <a href="#contact" class="btn btn-secondary">Solicitar Contato</a>
      </div>
    </div>
  `;
  return hero;
}

function createPropertiesSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'properties';
  section.className = 'section';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'Imóveis em Destaque';

  const grid = document.createElement('div');
  grid.className = 'properties-grid container';

  properties.forEach((property) => {
    const card = document.createElement('div');
    card.className = 'property-card';

    const bedroomsIcon = property.bedrooms > 0 ? `<span>🛏️ ${property.bedrooms}</span>` : '';
    const bathroomsIcon = property.bathrooms > 0 ? `<span>🚿 ${property.bathrooms}</span>` : '';

    card.innerHTML = `
      <div class="property-image" style="background-image: url('${property.image}')">
        <span class="property-tag">${property.tag}</span>
      </div>
      <div class="property-info">
        <h3>${property.title}</h3>
        <p class="location">📍 ${property.location}</p>
        <div class="property-details">
          ${bedroomsIcon}
          ${bathroomsIcon}
          <span>📐 ${property.area}m²</span>
        </div>
        <p class="property-price">${property.price}</p>
        <button class="btn-details" data-id="${property.id}">Ver Detalhes</button>
      </div>
    `;

    const btn = card.querySelector('.btn-details') as HTMLButtonElement;
    btn.addEventListener('click', () => {
      alert(`Detalhes do imóvel: ${property.title}\nPreço: ${property.price}\nLocalização: ${property.location}`);
    });

    grid.appendChild(card);
  });

  section.appendChild(title);
  section.appendChild(grid);
  return section;
}

function createStatsSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'stats';
  section.className = 'stats';

  const container = document.createElement('div');
  container.className = 'container';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'Nossos Números';
  title.style.color = '#ffffff';
  title.style.setProperty('--accent', '#e2b714');

  const grid = document.createElement('div');
  grid.className = 'stats-grid';

  stats.forEach((stat) => {
    const item = document.createElement('div');
    item.className = 'stat-item';
    item.innerHTML = `
      <h3>${stat.value}</h3>
      <p>${stat.label}</p>
    `;
    grid.appendChild(item);
  });

  container.appendChild(title);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

function createContactSection(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'section';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'Entre em Contato';

  const form = document.createElement('form');
  form.className = 'contact-form container';
  form.innerHTML = `
    <div class="form-group">
      <label for="name">Nome</label>
      <input type="text" id="name" placeholder="Seu nome completo" required />
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input type="email" id="email" placeholder="seu@email.com" required />
    </div>
    <div class="form-group">
      <label for="phone">Telefone</label>
      <input type="tel" id="phone" placeholder="(11) 99999-9999" />
    </div>
    <div class="form-group">
      <label for="message">Mensagem</label>
      <textarea id="message" placeholder="Conte-nos sobre o imóvel que você procura..." required></textarea>
    </div>
    <button type="submit" class="btn-submit">Enviar Mensagem</button>
  `;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // Simulação de envio
    console.log('Dados do formulário:', { name, email, phone, message });
    alert(`Obrigado, ${name}! Recebemos sua mensagem e entraremos em contato em breve.`);
    form.reset();
  });

  section.appendChild(title);
  section.appendChild(form);
  return section;
}

function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} Prime Imóveis. Todos os direitos reservados.</p>
      <div class="social-links">
        <a href="#" aria-label="Facebook">📘</a>
        <a href="#" aria-label="Instagram">📷</a>
        <a href="#" aria-label="WhatsApp">💬</a>
        <a href="#" aria-label="LinkedIn">🔗</a>
      </div>
    </div>
  `;
  return footer;
}

function initApp(): void {
  const app = document.getElementById('app');
  if (!app) {
    throw new Error('Elemento #app não encontrado no DOM');
  }

  app.appendChild(createHeader());
  app.appendChild(createHero());
  app.appendChild(createPropertiesSection());
  app.appendChild(createStatsSection());
  app.appendChild(createContactSection());
  app.appendChild(createFooter());
}

document.addEventListener('DOMContentLoaded', initApp);