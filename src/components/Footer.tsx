export const Footer = () => {
  return (
    <footer className="bg-sage text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🧘‍♀️</div>
              <span className="text-xl font-semibold">Calm Pose</span>
            </div>
            <p className="text-white/80 mb-4">
              Your journey to inner peace and physical wellness starts here.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm">🐦</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Classes</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Hatha Yoga</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vinyasa Flow</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Restorative</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Sessions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Video Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meditation Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wellness Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📧 hello@calmpose.com</p>
              <p>📞 (555) 123-YOGA</p>
              <p>📍 123 Serenity Lane<br />Peaceful City, PC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Calm Pose. All rights reserved. Find your inner peace.</p>
        </div>
      </div>
    </footer>
  );
};