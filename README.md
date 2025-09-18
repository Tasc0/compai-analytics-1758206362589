# CompAI - AI-Powered Quarry Analytics Dashboard

A modern, responsive web application for quarry operations management with AI-powered insights, built with Next.js, React, and integrated with Google Sheets and OpenAI.

## 🚀 Features

- **Interactive Dashboard**: Real-time analytics with Chart.js visualizations
- **AI-Powered Insights**: Strategic recommendations using OpenAI GPT-4
- **Google Sheets Integration**: Seamless data synchronization
- **Responsive Design**: Modern UI with Tailwind CSS
- **Real-time Updates**: Live data refresh and notifications
- **Report Generation**: Automated PDF reports and analytics
- **Professional UI/UX**: Clean, intuitive interface design

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Google Cloud Platform account with Sheets API enabled
- OpenAI API key
- Git for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/compai-analytics.git
   cd compai-analytics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update .env.local with your API keys:
   - OPENAI_API_KEY: Your OpenAI API key
   - GOOGLE_SHEETS_PRIVATE_KEY: Google Service Account private key
   - GOOGLE_SHEETS_CLIENT_EMAIL: Google Service Account email
   - GOOGLE_SHEET_ID: Your Google Sheets document ID

4. **Set up Google Sheets API**
   - Go to Google Cloud Console
   - Create a new project or select existing one
   - Enable the Google Sheets API
   - Create a Service Account and download the JSON key
   - Share your Google Sheet with the service account email

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 📊 Google Sheets Structure

Your Google Sheets document should contain the following worksheets:

- **Dashboard**: Summary metrics and KPIs
- **Revenue**: Revenue data by period
- **Production**: Production volumes and materials
- **Costs**: Operational costs breakdown
- **Safety**: Safety incidents and compliance
- **Equipment**: Equipment utilization and maintenance
- **Labor**: Workforce metrics and scheduling
- **Quality**: Quality control data
- **Environmental**: Environmental impact metrics
- **Inventory**: Material and supply inventory

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables for Production

Set the following environment variables in your deployment platform:

- OPENAI_API_KEY
- GOOGLE_SHEETS_PRIVATE_KEY
- GOOGLE_SHEETS_CLIENT_EMAIL
- GOOGLE_SHEET_ID

## 📱 Usage

1. **Dashboard**: View real-time quarry operations metrics
2. **Analytics**: Get AI-powered insights and recommendations
3. **Reports**: Generate and download detailed reports
4. **Settings**: Configure notifications and preferences

## 🤖 AI Features

- **Revenue Analysis**: AI insights on revenue trends and optimization
- **Production Efficiency**: Recommendations for production improvements
- **Cost Optimization**: Suggestions for reducing operational costs
- **Safety Analysis**: AI-powered safety risk assessments

## 🔧 Development

### Project Structure

- `/app`: Next.js 14 app directory structure
- `/components`: React components
- `/pages/api`: API routes for backend functionality
- `/styles`: Global CSS and Tailwind configuration

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 📄 License

MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please open an issue on GitHub.

---

**CompAI Analytics** - Transforming quarry operations with AI-powered insights.