import './style.css';

// ============================================================
// TIPOS
// ============================================================

interface Imovel {
  id: number;
  titulo: string;
  tipo: 'Casa' | 'Apartamento' | 'Cobertura' | 'Kitnet';
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  preco: number;
  area: number;
  quartos: number;
  banheiros: number;
  vagas: number;
  descricao: string;
  imagem: string;
  destaque: boolean;
  dataCadastro: string;
}

interface Contato {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  imovelId?: number;
}

// ============================================================
// DADOS MOCKADOS
// ============================================================

const imoveis: Imovel[] = [
  {
    id: 1,
    titulo: 'Casa Moderna com Piscina',
    tipo: 'Casa',
    endereco: 'Rua das Flores, 123',
    bairro: 'Jardim América',
    cidade: 'São Paulo',
    estado: 'SP',
    preco: 850000,
    area: 320,
    quartos: 4,
    banheiros: 3,
    vagas: 2,
    descricao: 'Linda casa moderna com acabamento de alto padrão, piscina aquecida, churrasqueira e amplo jardim. Sala de estar integrada com cozinha americana. Suíte master com closet e hidromassagem.',
    imagem: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    destaque: true,
    dataCadastro: '2025-01-15'
  },
  {
    id: 2,
    titulo: 'Apartamento Vista para o Mar',
    tipo: 'Apartamento',
    endereco: 'Av. Beira Mar, 456, Apto 1201',
    bairro: 'Praia Grande',
    cidade: 'Santos',
    estado: 'SP',
    preco: 620000,
    area: 180,
    quartos: 3,
    banheiros: 2,
    vagas: 1,
    descricao: 'Apartamento com vista panorâmica para o mar, 2 suítes, sacada com churrasqueira, cozinha planejada e armários embutidos. Condomínio com piscina, academia e salão de festas.',
    imagem: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    destaque: true,
    dataCadastro: '2025-02-20'
  },
  {
    id: 3,
    titulo: 'Cobertura Duplex Premium',
    tipo: 'Cobertura',
    endereco: 'Rua Augusta, 789',
    bairro: 'Consolação',
    cidade: 'São Paulo',
    estado: 'SP',
    preco: 2500000,
    area: 450,
    quartos: 5,
    banheiros: 4,
    vagas: 3,
    descricao: 'Cobertura duplex de alto luxo com piscina privativa, terraço com jardim, home theater, adega climatizada e automação residencial completa. Vista 360° da cidade.',
    imagem: 'https://images.unsplash.com/photo-1600566753086-00f18f6bae2b?w=600&q=80',
    destaque: true,
    dataCadastro: '2025-03-10'
  },
  {
    id: 4,
    titulo: 'Kitnet Mobiliada Centro',
    tipo: 'Kitnet',
    endereco: 'Rua Direita, 321, Apto 05',
    bairro: 'Centro Histórico',
    cidade: 'São Paulo',
    estado: 'SP',
    preco: 180000,
    area: 35,
    quartos: 1,
    banheiros: 1,
    vagas: 0,
    descricao: 'Kitnet completa e mobiliada, ideal para estudantes ou profissionais. Próximo ao metrô, comércio e serviços. Cozinha americana, banheiro com box e lavanderia compartilhada.',
    imagem: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    destaque: false,
    dataCadastro: '2025-01-05'
  },
  {
    id: 5,
    titulo: 'Casa em Condomínio Fechado',
    tipo: 'Casa',
    endereco: 'Alameda dos Ipês, 50',
    bairro: 'Alphaville',
    cidade: 'Barueri',
    estado: 'SP',
    preco: 1200000,
    area: 400,
    quartos: 5,
    banheiros: 4,
    vagas: 4,
    descricao: 'Casa em condomínio de alto padrão com segurança 24h. Piscina, quadra, campo de futebol e área de lazer completa. Suíte master com hidro e closet.',
    imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    destaque: true,
    dataCadastro: '2025-04-01'
  },
  {
    id: 6,
    titulo: 'Apartamento Compacto',
    tipo: 'Apartamento',
    endereco: 'Rua da Consolação, 1500, Apto 45',
    bairro: 'Consolação',
    cidade: 'São Paulo',
    estado: 'SP',
    preco: 350000,
    area: 55,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    descricao: 'Apartamento compacto e bem localizado, próximo a hospitais, faculdades e comércio. Sala com sacada, cozinha americana, armários planejados e condomínio com portaria 24h.',
    imagem: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    destaque: false,
    dataCadastro: '2025-02-10'
  }
];

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function formatarPreco(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

function formatarData(data: string): string {
  const d = new Date(data);
  return d.toLocaleDateString('pt-BR');
}

function criarElemento<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  classes: string[] = [],
  atributos: Record<string, string> = {},
  conteudo?: string | HTMLElement
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  classes.forEach(c => el.classList.add(c));
  Object.entries(atributos).forEach(([key, value]) => el.setAttribute(key, value));
  if (conteudo) {
    if (typeof conteudo === 'string') {
      el.innerHTML = conteudo;
    } else {
      el.appendChild(conteudo);
    }
  }
  return el;
}

// ============================================================
// COMPONENTES
// ============================================================

function criarCardImovel(imovel: Imovel): HTMLElement {
  const card = criarElemento('div', ['card-imovel']);
  card.dataset.id = String(imovel.id);

  const badge = imovel.destaque
    ? '<span class="badge-destaque">Destaque</span>'
    : '';

  card.innerHTML = `
    <div class="card-imagem">
      <img src="${imovel.imagem}" alt="${imovel.titulo}" loading="lazy" />
      ${badge}
    </div>
    <div class="card-conteudo">
      <h3 class="card-titulo">${imovel.titulo}</h3>
      <p class="card-endereco">${imovel.endereco} - ${imovel.bairro}, ${imovel.cidade}/${imovel.estado}</p>
      <p class="card-preco">${formatarPreco(imovel.preco)}</p>
      <div class="card-info">
        <span><i class="icon-area"></i> ${imovel.area}m²</span>
        <span><i class="icon-quartos"></i> ${imovel.quartos} quartos</span>
        <span><i class="icon-banheiros"></i> ${imovel.banheiros} banheiros</span>
        <span><i class="icon-vagas"></i> ${imovel.vagas} vagas</span>
      </div>
      <p class="card-descricao">${imovel.descricao.substring(0, 120)}...</p>
      <div class="card-acoes">
        <button class="btn-detalhes" data-id="${imovel.id}">Ver Detalhes</button>
        <button class="btn-contato" data-id="${imovel.id}">Entrar em Contato</button>
      </div>
    </div>
  `;

  return card;
}

function criarModalDetalhes(imovel: Imovel): HTMLElement {
  const overlay = criarElemento('div', ['modal-overlay']);
  overlay.id = 'modal-detalhes';

  const modal = criarElemento('div', ['modal']);
  modal.innerHTML = `
    <button class="modal-fechar" aria-label="Fechar">&times;</button>
    <div class="modal-imagem">
      <img src="${imovel.imagem}" alt="${imovel.titulo}" />
    </div>
    <div class="modal-conteudo">
      <h2>${imovel.titulo}</h2>
      <p class="modal-endereco">${imovel.endereco} - ${imovel.bairro}, ${imovel.cidade}/${imovel.estado}</p>
      <p class="modal-preco">${formatarPreco(imovel.preco)}</p>
      <div class="modal-info">
        <div><strong>Área:</strong> ${imovel.area}m²</div>
        <div><strong>Quartos:</strong> ${imovel.quartos}</div>
        <div><strong>Banheiros:</strong> ${imovel.banheiros}</div>
        <div><strong>Vagas:</strong> ${imovel.vagas}</div>
        <div><strong>Tipo:</strong> ${imovel.tipo}</div>
        <div><strong>Cadastro:</strong> ${formatarData(imovel.dataCadastro)}</div>
      </div>
      <p class="modal-descricao">${imovel.descricao}</p>
      <button class="btn-contato-modal" data-id="${imovel.id}">Solicitar Visita</button>
    </div>
  `;

  overlay.appendChild(modal);
  return overlay;
}

function criarFormularioContato(imovelId?: number): HTMLElement {
  const overlay = criarElemento('div', ['modal-overlay']);
  overlay.id = 'modal-contato';

  const modal = criarElemento('div', ['modal', 'modal-contato']);
  modal.innerHTML = `
    <button class="modal-fechar" aria-label="Fechar">&times;</button>
    <h2>${imovelId ? 'Solicitar Visita' : 'Fale Conosco'}</h2>
    <form id="form-contato">
      <input type="hidden" name="imovelId" value="${imovelId || ''}" />
      <div class="form-grupo">
        <label for="nome">Nome completo</label>
        <input type="text" id="nome" name="nome" required placeholder="Seu nome" />
      </div>
      <div class="form-grupo">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required placeholder="seu@email.com" />
      </div>
      <div class="form-grupo">
        <label for="telefone">Telefone</label>
        <input type="tel" id="telefone" name="telefone" required placeholder="(11) 99999-9999" />
      </div>
      <div class="form-grupo">
        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows="4" required placeholder="Sua mensagem..."></textarea>
      </div>
      <button type="submit" class="btn-en