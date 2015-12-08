##Conductor
1. **Login**
  * Authenticate
  * Display Screen
2. **Select Route**
  * Display Route Options
3. **Select Trip** *[ Scheduled time ]*
  * Display Trip options( may be clipped using current time)
4. **Populate Wallet/Balance Sheet**
  * Add initial Amount
  * Initialize Passenger Count = 0
5. **Status** 
  * Update Start time. *Usefull for frequent travelleres [ Bus Could be delayed ]*
6. **Continuously Issue Ticket** *[ For fast process, map num-pad keys to stops/stages. Note PMPL charge stage wise and not stop-wise ]*
  * Populate start [ shortcut key based on route: stop1, stop2, or stage1, stage2 etc. ]
  * Populate end [ shortcut key based on route: stop1, stop2, or stage1, stage2 etc. ]
  * Populate Amount
  * Populate Location[ optional, background ]
  * Issue ticket
  * Notify server @ seat accupaied duration
  * Notify server @ current bus location
  * Update Wallet, Ballance sheet
  * Print ticket for non-smart passenger
7. **Continuously update bus location**
  * Incase no passenger entry for particulare duration[ e.g,. 1min, 500mtr etc.] Push location to server.
