#screenrc.txt
#this is the configuration file for the program call screen
#create this file while I'm watching the video 
#from carl on The Sat 9 July 2016
# $Id: .screenrc 287 2008-08-13 02:21:10Z root $
  
  escape ^A^A
  
  startup_message off
  
  defscrollback 10000
  
  hardstatus alwayslastline
  
  hardstatus string "%{kG}%50>%-w%{ky}%n %t%{-}%+w%{-} %>%=%{ky}Ctrl-A ?%{-} for help"
  
  #This is for mouse scrool-whell support.
  #tell screen that xterm can scrool.
  
  termcapinfo xterm ti@:te@
  
  #Bind Shift_PgUp/PgDon.
