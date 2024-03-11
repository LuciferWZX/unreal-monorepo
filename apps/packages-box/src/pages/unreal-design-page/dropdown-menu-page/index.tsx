import { FC } from 'react';
import {Menu,Button} from "@wzx-unreal/unreal-design";
const {DropdownMenu,DropdownMenuSubTrigger,DropdownMenuRadioItem,DropdownMenuRadioGroup,DropdownMenuPortal,DropdownMenuSubContent,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuSub,DropdownMenuItem,DropdownMenuSeparator,DropdownMenuCheckboxItem,DropdownMenuGroup,DropdownMenuShortcut,DropdownMenuLabel}=Menu

const DropdownMenuPage:FC = () => {
  return(
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{width:500,height:500}}>
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuLabel >My Account</DropdownMenuLabel>
            <DropdownMenuSeparator  />
            <DropdownMenuGroup >
              <DropdownMenuItem >
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuCheckboxItem checked={true}>
              Checkbox item
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem >
              Checkbox item 2
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem disabled={true}>
              Checkbox disabled
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={"top"}>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
export default DropdownMenuPage