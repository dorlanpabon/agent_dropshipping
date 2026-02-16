# 🤖 Autonomous Dropshipping Agent

Un agente autónomo de inteligencia artificial para gestión completa de dropshipping - desde la compra del dominio hasta la optimización de ventas y campañas de marketing.

## 🌟 Características

### Gestión Completa del Negocio

- **🌐 Gestión de Dominio**: Búsqueda automática de dominios disponibles y compra
- **🏪 Creación de Tienda Shopify**: Configuración automática de tienda y tema
- **📦 Gestión de Productos (Dropi)**: Búsqueda, análisis e importación automática de productos
- **💰 Gestión de Ventas**: Procesamiento de pedidos y seguimiento
- **📊 Análisis y Optimización**: Analytics en tiempo real y recomendaciones basadas en IA
- **📱 Marketing Automatizado**: Campañas en Facebook, TikTok e Instagram

### Inteligencia Artificial

- Generación automática de nombres de negocio
- Análisis de potencial de productos
- Optimización de listados de productos
- Recomendaciones automáticas basadas en datos
- Optimización continua de campañas de marketing

### Modos de Operación

- **Modo Autónomo**: El agente toma decisiones y ejecuta acciones automáticamente
- **Modo Supervisado**: El agente sugiere acciones y espera aprobación

## 📋 Requisitos Previos

- Node.js >= 22
- Cuenta de OpenAI (para el agente de IA)
- Cuenta de Shopify Partner (para crear tiendas)
- API Keys de:
  - Shopify
  - Dropi
  - Proveedor de dominios (GoDaddy, Namecheap, etc.)
  - Facebook Ads (opcional)
  - TikTok Ads (opcional)
  - Instagram Ads (opcional)

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/dorlanpabon/agent_dropshipping.git
cd agent_dropshipping

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales
```

## ⚙️ Configuración

Edita el archivo `.env` con tus credenciales:

```env
# OpenAI Configuration
OPENAI_API_KEY=tu_clave_api_de_openai

# Shopify Configuration
SHOPIFY_API_KEY=tu_clave_api_de_shopify
SHOPIFY_API_SECRET=tu_secreto_de_shopify
SHOPIFY_ACCESS_TOKEN=tu_token_de_acceso
SHOPIFY_STORE_DOMAIN=tu-tienda.myshopify.com

# Domain Provider
DOMAIN_PROVIDER_API_KEY=tu_clave_de_proveedor_dominio
DOMAIN_PROVIDER_API_SECRET=tu_secreto_de_proveedor_dominio

# Dropi Configuration
DROPI_API_KEY=tu_clave_api_de_dropi

# Marketing Platforms (opcional)
FACEBOOK_ACCESS_TOKEN=tu_token_de_facebook
FACEBOOK_AD_ACCOUNT_ID=tu_cuenta_de_anuncios_fb
TIKTOK_ACCESS_TOKEN=tu_token_de_tiktok
TIKTOK_AD_ACCOUNT_ID=tu_cuenta_de_anuncios_tt
INSTAGRAM_ACCESS_TOKEN=tu_token_de_instagram

# Agent Configuration
AGENT_MODE=supervised  # o 'autonomous'
AGENT_CHECK_INTERVAL_MINUTES=60
AUTO_APPROVE_PURCHASES=false
MAX_DAILY_AD_SPEND=100
```

## 🎯 Uso

### Compilar el Proyecto

```bash
npm run build
```

### Iniciar el Agente

```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

### Usar la CLI

```bash
# Ver el estado del agente
npx tsx src/cli.ts status

# Ejecutar ciclo de optimización
npx tsx src/cli.ts optimize

# Iniciar el agente
npx tsx src/cli.ts start
```

## 🏗️ Arquitectura

```
agent_dropshipping/
├── src/
│   ├── agents/
│   │   └── AutonomousAgent.ts      # Orquestador principal del agente
│   ├── modules/
│   │   ├── domain/
│   │   │   └── DomainManager.ts    # Gestión de dominios
│   │   ├── shopify/
│   │   │   └── ShopifyManager.ts   # Gestión de tienda Shopify
│   │   ├── products/
│   │   │   └── ProductManager.ts   # Gestión de productos Dropi
│   │   ├── sales/
│   │   │   └── SalesManager.ts     # Gestión de ventas
│   │   ├── marketing/
│   │   │   └── MarketingManager.ts # Gestión de campañas
│   │   └── analytics/
│   │       └── AnalyticsManager.ts # Analytics y optimización
│   ├── config/
│   │   └── index.ts                # Configuración
│   ├── state/
│   │   └── StateManager.ts         # Gestión de estado
│   ├── utils/
│   │   └── logger.ts               # Sistema de logs
│   ├── index.ts                    # Punto de entrada principal
│   └── cli.ts                      # Interfaz de línea de comandos
├── .env.example                    # Ejemplo de configuración
├── package.json
└── tsconfig.json
```

## 🔄 Flujo de Trabajo

1. **Inicialización**
   - Generación de nombres de negocio con IA
   - Búsqueda y compra de dominio
   - Creación de tienda Shopify
   - Configuración inicial

2. **Sourcing de Productos**
   - Búsqueda de productos tendencia en Dropi
   - Análisis de potencial de cada producto
   - Optimización de listados
   - Importación a Shopify

3. **Marketing**
   - Creación de campañas en Facebook, TikTok, Instagram
   - Generación de creativos publicitarios con IA
   - Configuración de targeting

4. **Optimización Continua**
   - Análisis de rendimiento de productos
   - Análisis de campañas de marketing
   - Generación de recomendaciones con IA
   - Ejecución automática de optimizaciones (modo autónomo)

## 📊 Módulos Principales

### DomainManager
- Verificación de disponibilidad de dominios
- Generación de sugerencias
- Compra automatizada
- Configuración de DNS

### ShopifyManager
- Creación de tiendas
- Configuración de temas
- Gestión de productos
- Analytics de tienda

### ProductManager
- Búsqueda en Dropi
- Análisis de productos
- Optimización de listados
- Gestión de inventario

### SalesManager
- Procesamiento de pedidos
- Seguimiento de envíos
- Gestión de clientes
- Procesamiento de devoluciones

### MarketingManager
- Campañas de Facebook Ads
- Campañas de TikTok Ads
- Campañas de Instagram Ads
- Optimización de rendimiento

### AnalyticsManager
- Métricas de rendimiento
- Análisis de tendencias
- Recomendaciones con IA
- Tests A/B

## 🛡️ Seguridad

- Todas las credenciales se manejan mediante variables de entorno
- No se almacenan datos sensibles en el código
- Logs estructurados para auditoría
- Modo supervisado para control de acciones críticas

## 🔮 Roadmap

- [ ] Integración con más proveedores de productos
- [ ] Soporte para múltiples tiendas
- [ ] Dashboard web para monitoreo
- [ ] Integraciones con email marketing
- [ ] Soporte para más plataformas de marketing
- [ ] ML mejorado para predicción de tendencias
- [ ] Automatización de servicio al cliente

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

MIT License - ver el archivo [LICENSE](LICENSE) para más detalles

## 🙏 Agradecimientos

- Inspirado en [OpenClaw](https://github.com/openclaw/openclaw)
- Construido con TypeScript y Node.js
- Powered by OpenAI GPT-4

## 📞 Soporte

Para preguntas o problemas, por favor abre un issue en GitHub.

---

**Nota**: Este es un proyecto en desarrollo. Algunas características pueden estar en fase de implementación. Se recomienda usar en modo supervisado inicialmente.